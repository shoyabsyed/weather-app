import React from 'react'
import Header from './components/Header'
import WeatherBasicInfo from './components/WeatherBasicInfo'
import WeatherHourlyInfo from './components/WeatherHourlyInfo'
import './WeatherDashboard.css'

const today = new Date();

function WeatherDashboard({ location, data, overallData = {},  onLocationSearch, noLocationFound }) {
    const {hourly = []} = overallData || {};
    const todayHours = hourly.filter(hour => new Date(hour.dt * 1000).getDate() === today.getDate())
    return (
        <main className="ui__app">
            <Header noLocationFound={noLocationFound} onSearch={onLocationSearch} data={data} />
            <WeatherBasicInfo noLocationFound={noLocationFound} data={data} />
            <WeatherHourlyInfo  data={todayHours} />
        </main>
    )
}

export default WeatherDashboard
