import React from 'react';
import './App.css';
import { AppContext } from './AppProvider';
import WeatherDashboard from './dashboard/WeatherDashboard';

import "pure-css-loader/dist/css-loader.css"

function App() {
  const contextValues = React.useContext(AppContext)
  const {isLoading} = contextValues
  return <React.Fragment>
    {!!isLoading && <div className="loader loader-bouncing is-active"></div>}
    <WeatherDashboard {...contextValues} />
  </React.Fragment>

}

export default App;
