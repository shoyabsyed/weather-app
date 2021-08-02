import React from 'react'

function WeatherNoLocation() {
    return <section className="ui__app__info">
        <div className="ui__app__info__weather">
            <div>
                <h3 style={{padding: "2em", fontSize: "2em"}} >No Location found</h3>
            </div>
        </div>
        
    </section>
}

export default WeatherNoLocation
