# Weather App created using ReactJS 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Features
- View Weather Details about any city
- Search option provided. User need to enter atleast 3 characters to search for City
- Today's Hourly weather information displayed as card views

### Approach 
I had used public [OpenWeatherMap](https://openweathermap.org/) API to fetch weather data.
For UI mainly created 4 Components and 1 Main Container Componet
##### Container Component
- **WeatherDashboard** (Responsible for Holding all weather components)

##### UI Component
- **Header Component** (Display City Name and Today's Date. Also provide search option)
- **Weather Basic Info** (Display City Weather Info details)
- **Weather Hourly Info** (Display Today's weather information)
- **No Location Found Component**