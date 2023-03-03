
import './WeatherAhead.css';

import useApis from '../../hooks/useApis';
import useFetch from '../../hooks/useFetch';
import WeatherComponent from './WheaterComponent';
import ErrorHandler from '../error-component/ErrorHandler';
import Loading from '../loading-component/Loading';

const WeatherAhead = () => {
    const { urlAhead } = useApis();
    const { data, error, errorMessage, loading } = useFetch(urlAhead);
    let weather;

    data.forEach(element => {
        weather = element.forecast.forecastday;
    });

    if (loading) {
        return <>
            <Loading />
        </>
    };

    return (
        <>
            {error ?
                <>
                    <ErrorHandler props={errorMessage} />
                </>
                :
                <div className='flex-wrapper'>
                    {!!weather && weather.map((x) =>
                        <WeatherComponent
                            weatherInfo={x} _
                            key={x.date} />
                    )}
                </div>
            }
        </>
    );
};

export default WeatherAhead;