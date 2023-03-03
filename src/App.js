
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { CityContextProvider } from './contexts/CityContext';

import Navigation from './components/navigation/Navigation';
import GeoPosition from './components/geo-position/GeoPosition';
import WeatherNow from './components/weather-now/WeatherNow';
import HourlyWeather from './components/hourly/HourlyWeather';
import WeatherAhead from './components/weather-ahead/WheaterAhead';

function App() {
  return (
    <div className="App">
      <CityContextProvider>
        <Navigation />
        <Routes>
          <Route path='/location' element={<GeoPosition />} />
          <Route path='/now' element={<WeatherNow />} />
          <Route path='/hourly' element={<HourlyWeather />} />
          <Route path='/daily' element={<WeatherAhead />} />
        </Routes>
      </CityContextProvider>
      <footer className='footer'>
        <div>
          weather forecast
        </div>
      </footer>
    </div>
  );
};

export default App;
