import React from 'react'
import "./Header.css"

function Header({ data = {}, onSearch, noLocationFound }) {
    const { sys = {}, name = "" } = data || {}
    const date = new Date().toDateString();

    const [locationInput, setLocationInput] = React.useState("");

    return <header className="ui__app__header">
        {!noLocationFound && <div className="ui__app__header__info">
            <p className="ui__label__date">{date}</p>
            <h3>{name}{!!sys.country ? `, ${sys.country}` : ''}</h3>
        </div>}

        <div className="ui__app__header__search">
            <ion-icon name="search"></ion-icon>
            <input
                value={locationInput}
                onChange={e => setLocationInput(e.target.value)}
                type="text"
                placeholder="search for city" />
            {(locationInput || "").length > 2 ? <button onClick={() => onSearch(locationInput)} className="ui__action__search"><ion-icon title="Search" name="arrow-forward-outline"></ion-icon></button> : <></>}
        </div>


    </header>
}

export default Header
