
import { useContext } from 'react';
import { CityContext } from '../../contexts/CityContext';

const HourlyComponent = ({
    weatherInfo
}) => {
    const time = weatherInfo.time.substring(10, 16);
    const { city } = useContext(CityContext);

    return (
        <div className='hourly-weather'>
            <h4 className='city'>
                {city}
            </h4>
            <h4>
                {time} h
            </h4>
            <div>
                <img src={weatherInfo.condition.icon} alt='' />
            </div>
            <div>
                {weatherInfo.condition.text}
            </div>
            <div>
                <h3>
                    {weatherInfo.feelslike_c} *C
                </h3>
            </div>
            <h5 className='rain-wind'>Rain: {weatherInfo.chance_of_rain} % / Wind: {weatherInfo.wind_kph} km/h
            </h5>
        </div>
    );
};

export default HourlyComponent;