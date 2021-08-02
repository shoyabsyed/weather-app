import React, { useEffect, useState, createContext } from 'react';
import { mockData, mockOverallData } from './data.mockup';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const DEFAULT_USER_LOCATION = "Guntur, IN";
const USER_LOCATION = "USER_LOCATION";

export const AppContext = createContext();

export default function AppProvider({ children, ...props }) {

    const currentLocation = localStorage.getItem(USER_LOCATION) || DEFAULT_USER_LOCATION;

    const [isLoading, setLoading] = useState(false);
    const [noLocationFound, setNoLocationFound] = useState(false);
    const [location, setLocation] = useState(currentLocation);
    const [overallData, setOverallData] = useState(mockOverallData);
    const [data, setData] = useState(mockData);

    useEffect(() => {
        //onLocationSearch(location);
    }, []);

    const fetchData = async ({ lat, lon }) => {
        await fetch(`${API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setLoading(false);
                setOverallData(result)
                console.log(result);
            }).catch(error => {
                setLoading(false);
            })

    }

    const onLocationSearch = async (location = DEFAULT_USER_LOCATION) => {
        setLoading(true);
        await fetch(`${API_URL}/weather?q=${location}&units=metric&APPID=${API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setLoading(false);
                if(result.cod === "404") {
                    setLoading(false);
                    setNoLocationFound(true);
                    setOverallData({});
                    setData({});
                    return false;
                }
                console.log({result});
                const { name, coord } = result
                localStorage.setItem(USER_LOCATION, name);
                setLocation(name);
                setData(result);
                fetchData(coord || {});
                setNoLocationFound(false)
            }).catch(error => {
                setLoading(false);
            })
    }



    return <AppContext.Provider value={{
        data,
        overallData,
        location,
        onLocationSearch,
        isLoading,
        noLocationFound
    }}>
        {children}
    </AppContext.Provider>
}