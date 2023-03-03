
import './HourlyWeather.css';

import useApis from '../../hooks/useApis';
import useFetch from '../../hooks/useFetch';
import HourlyComponent from "./HourlyComponent";
import ErrorHandler from '../error-component/ErrorHandler';
import Loading from '../loading-component/Loading';

const HourlyWeather = () => {
    const { urlAhead } = useApis();
    const { data, error, errorMessage, loading } = useFetch(urlAhead);

    let weather;
    data.forEach(element => {
        element.forecast.forecastday.forEach(data => {
            weather = data.hour;
        });
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
                    {!!weather && weather.map((x, index) =>
                        <HourlyComponent weatherInfo={x}
                            key={index} />)}
                </div>
            };
        </>
    );
};

export default HourlyWeather;