
import { useContext } from "react";
import { CityContext } from "../contexts/CityContext";

const useApis = () => {
    const { city } = useContext(CityContext);

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=no`;
    const urlAhead = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=10&aqi=no`;

    return { url, urlAhead, city };
};

export default useApis;