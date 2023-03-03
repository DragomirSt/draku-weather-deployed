
import './WeatherNow.css'

import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import useApis from '../../hooks/useApis';
import ErrorHandler from '../error-component/ErrorHandler';
import Loading from '../loading-component/Loading';

const WeatherNow = () => {
    const { url, city } = useApis();
    const { data, error, errorMessage, loading } = useFetch(url);

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
                <>
                    {data && data.map(x => (
                        <div className="today-forecast" key={city}>
                            <h4>
                                {city}
                            </h4>
                            <div>
                                {x.current.condition.text}
                            </div>
                            <div>
                                <img src={x.current.condition.icon} alt="oopss" />
                            </div>
                            <h3>
                                {x.current.feelslike_c} *C
                            </h3>
                            <h5 className='rain-wind'>
                                Rain: {x.current.precip_in}  %   /  Wind: {x.current.wind_kph}  km/h
                            </h5>
                            <div className='links'>
                                <Link to='/hourly'>Hourly</Link> <Link to='/daily'>Daily</Link>
                            </div>
                        </div>
                    ))};
                </>
            };
        </>
    );
};

export default WeatherNow;