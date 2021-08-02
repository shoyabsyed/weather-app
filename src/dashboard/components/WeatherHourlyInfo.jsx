import React from 'react'
import "./WeatherHourlyInfo.css"

const formatTime = timestamp => {
    return new Date(timestamp * 1000).toLocaleTimeString().split(":00 ").join(" ")
}

const IMAGE_BASE_PATH = process.env.REACT_APP_ICON_URL;

function WeatherHourlyInfo({ data = [] }) {
    return <section className="ui__app__hourly">
        {data.map((hourInfo = {}) => <div className="ui__app__hourly__item" key={hourInfo.dt}>
            <header className="ui__app__hourly__item__header">
                <strong className="ui__label__title">{formatTime(hourInfo.dt)}</strong>
                <div className="ui__weather__info">
                    <img className="ui__img" src={`${IMAGE_BASE_PATH}/${hourInfo.weather[0].icon}.png`} alt="" />
                    <div>
                        <h3>{hourInfo.temp.toFixed(0)}°C</h3>
                    </div>
                    
                </div>
                <span className="ui__label__subtitle">{hourInfo.weather[0].description}</span>
            </header>

        </div>)}
    </section>
}

export default WeatherHourlyInfo
