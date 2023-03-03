
import { useContext } from 'react';
import { CityContext } from '../../contexts/CityContext';

const WeatherComponent = ({
    weatherInfo
}) => {
    const { city } = useContext(CityContext);

    return (
        <div className='weather-ahead'>
            <h4 className='city'>
                {city}
            </h4>
            <div>
                {weatherInfo.date}
            </div>
            <br></br>
            <h4>
                {weatherInfo.day.condition.text}
            </h4>
            <div>
                <img src={weatherInfo.day.condition.icon} alt='oopps' />
            </div>
            <div>
                <h3>
                    {weatherInfo.day.mintemp_c}  /
                    {weatherInfo.day.maxtemp_c}
                    <> *C</>
                </h3>
            </div>
            <div>
                <h5 className='rain-wind'>
                    Rain: {weatherInfo.day.daily_chance_of_rain}  %   /  Wind: {weatherInfo.day.maxwind_kph}  km/h
                </h5>
            </div>
        </div>
    );
};

export default WeatherComponent;