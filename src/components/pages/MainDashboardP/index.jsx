import React, { useEffect, useState } from 'react';
import { useStore } from '../../../common/Context';
import AirService from '../../../services/AirService';
import LidarService from '../../../services/LidarService';
import WeatherService from '../../../services/WeatherService';
import MainDashboardT from '../../templates/MainDashboardT';


function MainDashboardP(){
    const [airData, setAirData] = useState([]);
    const [lidarData, setLidarData] = useState([]);
    const [weatherData, setWeatherData] = useState([]);

    const [loadingAirData, setLoadingAirData] = useState(false);
    const [loadingLidarData, setLoadingLidarData] = useState(false);
    const [loadingWeatherData, setLoadingWeatherData] = useState(false);

    const loadAirData = () => {
        setLoadingAirData(true);
        AirService.airDataGET()
        .then((response)=>{
            setAirData(response);
        })
        .catch((error)=>{
            console.warn(`Error loading air data`);
            console.warn(error);
        })
        .then(()=>{
            setLoadingAirData(false);
        });
    };
    
    const loadLidarData = () => {
        setLoadingLidarData(true);
        LidarService.lidarDataGET()
        .then((response)=>{
            // console.log(response);
            setLidarData(response.data);
        })
        .catch((error)=>{
            console.warn(`Error loading lidar data`);
            console.warn(error);
        })
        .then(()=>{
            setLoadingLidarData(false);
        });
    };

    const loadWeatherData = () => {
        setLoadingWeatherData(true);
        WeatherService.weatherDataGET()
        .then((response)=>{
            setWeatherData(response);
        })
        .catch((error)=>{
            console.warn(`Error loading weather data`);
            console.warn(error);
        })
        .then(()=>{
            setLoadingWeatherData(false);
        });
    };

    useEffect(()=>{
        loadAirData();
        loadLidarData();
        loadWeatherData();
    },[]);

    return (
        <MainDashboardT
            loadingAirData={loadingAirData}
            airData = {airData}
            loadingLidarData={loadingLidarData}
            lidarData = {lidarData}
            loadingWeatherData={loadingWeatherData}
            weatherData = {weatherData}
            loadWeatherData = {loadWeatherData}
        />
    )
}
export default MainDashboardP;