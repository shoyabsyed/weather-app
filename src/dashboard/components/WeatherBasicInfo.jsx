import React from 'react'
import "./WeatherBasicInfo.css"
import WeatherNoLocation from './WeatherNoLocation';

const IMAGE_BASE_PATH = process.env.REACT_APP_ICON_URL;

function WeatherBasicInfo({ data = {}, noLocationFound = false }) {
    const { name = "", main = {}, weather = [], wind = {}, visibility = 0 } = data || {};
    const { temp = 0, feels_like = 0, pressure = 0, humidity = 0 } = main;
    const { speed = 0, deg = 0, gust } = wind;
    const [weatherInfo = {}] = weather;
    
    return noLocationFound ? <WeatherNoLocation /> : <section className="ui__app__info">
        <div className="ui__app__info__weather">
            <img src={`${IMAGE_BASE_PATH}/${weatherInfo.icon}@4x.png`} alt={weatherInfo.description} />
            <div>
                <h3 className="ui__app__info__temp">{temp.toFixed(0)}°C </h3>
                <p className="ui__app__info__temp__feels">Feels like {feels_like.toFixed(0)}°C. {weatherInfo.description} </p>
            </div>
        </div>
        <div className="ui__app__info__details">
            <p>Wind: <strong>{speed}m/s WNW</strong></p>
            <p>Pressure: <strong>{pressure}hPa</strong></p>
            <p>Humidity: <strong>{humidity}%</strong></p>
            <p>Visibility: <strong>{(visibility / 1000).toFixed(1)}km</strong></p>
        </div>
    </section>
}

export default WeatherBasicInfo
