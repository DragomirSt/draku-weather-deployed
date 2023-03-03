
import './Navigation.css';
import search from './magnifying-glass.png';
import location from './location.png';

import { NavLink, Link } from "react-router-dom";

import { CityContext } from '../../contexts/CityContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

const Navigation = () => {
    const navigate = useNavigate();
    const { city, setCityName } = useContext(CityContext);

    const active = {
        'fontWeight': 'bold',
        'color': '#00a8f0'
    };

    const searchLocation = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const cityName = formData.get('city').trim().toUpperCase();
        setCityName(cityName);
        e.target.reset();
        navigate('/now');
    };

    return (
        <>
            {city ?
                <nav>
                    <input id="nav-toggle" type="checkbox" />
                    <div className="nav-input">
                        <form method='POST' type="text" className='form' onSubmit={searchLocation}>
                            <input className="form-input" name='city' placeholder='Enter your location ...' />
                            <button type="submit" className="search-button">
                                <img src={search} alt='' />
                            </button>
                        </form>
                    </div>
                    <ul className="links">
                        <li><NavLink to="/now" style={({ isActive }) =>
                            isActive ? active : undefined
                        }>Now</NavLink></li>
                        <li><NavLink to="/hourly" style={({ isActive }) =>
                            isActive ? active : undefined
                        }>Hourly</NavLink></li>
                        <li><NavLink to="/daily" style={({ isActive }) =>
                            isActive ? active : undefined
                        }>Daily</NavLink></li>
                    </ul>
                    <label htmlFor="nav-toggle" className="icon-burger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </label>
                    {city ?
                        <div className='city-name'>
                            <p>weather at: </p>
                            <h4>{city}</h4>
                        </div>
                        : null}
                </nav>
                :
                <>
                    <div className='nav-start-page'>
                        <div>
                            <h3>Get Your Forecast</h3>
                        </div>
                        <div>
                            <Link className='location-link' to="/location">
                                <img src={location} alt='' />
                            </Link>
                        </div>
                        <div>
                            <form method='POST' type="text" onSubmit={searchLocation}>
                                <input className="form-input" name='city' placeholder='Enter your location ...' />
                                <button type="submit" class="search-button">
                                    <img src={search} alt='' />
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Navigation;