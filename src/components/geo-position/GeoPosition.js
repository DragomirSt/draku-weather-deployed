
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CityContext } from '../../contexts/CityContext';

const getGeoLocation = async (lat, long) => {
    try {
        const url = `https://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_API_KEY}&q=${lat}%2C%20${long}`;
        const response = await fetch(url);
        const weatherData = await response.json();
        if (weatherData.error) {
            throw (weatherData.error.message);
        };
        return weatherData;

    } catch (error) {
        throw (error);
    };
};

const GeoPosition = () => {
    const { setCityName } = useContext(CityContext);
    const navigate = useNavigate();

    const [location, setLocation] = useState({
        loaded: false,
        lat: null,
        lng: null
    });

    const onSuccess = (positon) => {
        setLocation({
            loaded: true,
            lat: positon.coords.latitude,
            lng: positon.coords.longitude
        });
    };

    const onError = () => {
        setLocation({
            loaded: false
        });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(onSuccess, onError,
            { enableHighAccuracy: true });
    }, []);

    useEffect(() => {
        if (location.loaded === true) {
            getGeoLocation(location.lat, location.lng)
                .then(res => {
                    const city = res.map(x => x.name).splice(0, 1);
                    setCityName(city);
                    navigate('/now');
                });
        }
    }, [location.lat, location.lng]);

    return (
        null
    );
};

export default GeoPosition;