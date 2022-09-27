import { Button, CircularProgress, Container } from '@mui/material';
import React, { useEffect } from 'react';
import Layout from '../Layout';
import useStyles from "./styles";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function MainDashboardT({
    loadingAirData,
    airData,
    loadingLidarData,
    lidarData,
    loadingWeatherData,
    weatherData,
    loadWeatherData,
}) {
    const classes = useStyles();
    
    const optionsLidar = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'LiDAR information',
          },
        },
    };
    const dataLidar = {
        labels: [...Array(lidarData.length).keys()],
        datasets: [
            {
                label: 'People',
                data: lidarData.map((item)=>{
                    return item.people;
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Vehicles',
                data: lidarData.map((item)=>{
                    return item.vehicles;
                }),
                borderColor: 'rgb(132, 170, 99)',
                backgroundColor: 'rgba(132, 170, 99, 0.5)',
            },
        ],
    }

    const optionsWeather = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Weather information',
          },
        },
    };
    const dataWeatherTemperature = {
        labels: [...Array(weatherData.length).keys()],
        datasets: [
            {
                label: 'Temp (°F)',
                data: weatherData.map((item)=>{
                    return item.temp;
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dew Point (°)',
                data: weatherData.map((item)=>{
                    return item.dewPoint;
                }),
                borderColor: 'rgb(132, 170, 99)',
                backgroundColor: 'rgba(132, 170, 99, 0.5)',
            },
        ],
    }
    const dataWeatherWind = {
        labels: [...Array(weatherData.length).keys()],
        datasets: [
            {
                label: 'Wind speed',
                data: weatherData.map((item)=>{
                    return item.windSpeed;
                }),
                borderColor: 'rgb(130, 99, 255)',
                backgroundColor: 'rgb(130, 99, 255, 0.5)',
            },
            {
                type: 'scatter',
                label: 'Wind gust',
                data: weatherData.map((item)=>{
                    return item.windGust;
                }),
                borderColor: 'rgb(252, 223, 3)',
                backgroundColor: 'rgba(252, 223, 3, 0.7)',
            },
        ],
    }
    const dataWeatherWindDir = {
        labels: [...Array(weatherData.length).keys()],
        datasets: [
            {
                label: 'Wind direction',
                data: weatherData.map((item)=>{
                    return item.windDir;
                }),
                borderColor: 'rgb(50, 50, 255)',
                backgroundColor: 'rgb(50, 50, 255, 0.5)',
            },
        ],
    }
    const dataWeatherPrecip = {
        labels: [...Array(weatherData.length).keys()],
        datasets: [
            {
                label: 'Precipitation Rate',
                data: weatherData.map((item)=>{
                    return item.precipRate;
                }),
                borderColor: 'rgb(10, 10, 10)',
                backgroundColor: 'rgb(10, 10, 10, 0.5)',
            },
            {
                label: 'Precipitation Acc',
                data: weatherData.map((item)=>{
                    return item.precipAccTot;
                }),
                borderColor: 'rgb(100, 100, 100, 0.3)',
                backgroundColor: 'rgb(100, 100, 100, 0.5)',
            },
        ],
    }
    const dataWeatherPressure = {
        labels: [...Array(weatherData.length).keys()],
        datasets: [
            {
                label: 'Pressure',
                data: weatherData.map((item)=>{
                    return item.pressure;
                }),
                borderColor: 'rgb(50, 168, 164)',
                backgroundColor: 'rgb(50, 168, 164, 0.5)',
            },
        ],
    }
    const dataWeatherUV = {
        labels: [...Array(weatherData.length).keys()],
        datasets: [
            {
                label: 'UV index',
                data: weatherData.map((item)=>{
                    return item.UvIndex;
                }),
                borderColor: 'rgb(168, 50, 66)',
                backgroundColor: 'rgb(168, 50, 66, 0.5)',
            },
        ],
    }

    useEffect(()=>{
    },[]);

    return (
        <Layout>
            <Container
                maxWidth={false}
                className={classes.root}
            >
                <h1>Dashboard</h1>

                <div>
                    <h2>Air</h2>
                    {(loadingAirData) ?
                        <div>
                            <CircularProgress />
                        </div>
                    :
                    <div>
                        <div>
                            <div className={classes.airDataContainer}>
                                <div className={classes.attrBar}>
                                    <div className={classes.attrItem}>
                                        <div><i>AQI</i></div><div><strong>{airData.aqi}</strong></div>
                                    </div>
                                    <div className={classes.attrItem}>
                                        <div><i>CO</i></div><div><strong>{airData.co} ppm</strong></div>
                                    </div>
                                    <div className={classes.attrItem}>
                                        <div><i>Temperature</i></div><div><strong>{airData.temp} °F</strong></div>
                                    </div>
                                </div>
                                <div className={classes.attrBar}>
                                    <div className={classes.attrItem}>
                                        <div><i>SO2</i></div><div><strong>{airData.so2} ppb</strong></div>
                                    </div>
                                    <div className={classes.attrItem}>
                                        <div><i>PM1.0</i></div><div><strong>{airData.pm1p0} μg/m<sup>3</sup></strong></div>
                                    </div>
                                    <div className={classes.attrItem}>
                                        <div><i>Pressure</i></div><div><strong>{airData.pres} hPa</strong></div>
                                    </div>
                                </div>
                                <div className={classes.attrBar}>
                                    <div className={classes.attrItem}>
                                        <div><i>NO2</i></div><div><strong>{airData.no2} ppb</strong></div>
                                    </div>
                                    <div className={classes.attrItem}>
                                        <div><i>PM2.5</i></div><div><strong>{airData.pm2p5} μg/m<sup>3</sup></strong></div>
                                    </div>
                                    <div className={classes.attrItem}>
                                        <div><i>Relative Humidity</i></div><div><strong>{airData.relhum} RH</strong></div>
                                    </div>
                                </div>
                                <div className={classes.attrBar}>
                                    <div className={classes.attrItem}>
                                        <div><i>O3</i></div><div><strong>{airData.o3} ppb</strong></div>
                                    </div>
                                    <div className={classes.attrItem}>
                                        <div><i>PM10</i></div><div><strong>{airData.pm10} μg/m<sup>3</sup></strong></div>
                                    </div>
                                    <div className={classes.attrItem}>
                                        <div><i>Noise</i></div><div><strong>{airData.noise} dB</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                }
                </div>
                <div className={classes.graphBox}>
                    <h2>LiDAR</h2>
                    {(loadingLidarData) ?
                        <div>
                            <CircularProgress />
                        </div>
                    :
                    <div>
                        <div>
                            <div className={classes.lineContainer}>
                                <Line options={optionsLidar} data={dataLidar}/>
                            </div>
                        </div>
                        <br/>
                    </div>
                }
                </div>
                <div className={classes.graphBox}>
                    <h2>Weather</h2>
                    {(loadingWeatherData) ?
                        <div>
                            <CircularProgress />
                        </div>
                    :
                    <div>
                        <div>
                            <div className={classes.lineContainer}>
                                <Line options={optionsWeather} data={dataWeatherTemperature}/>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <div className={classes.lineContainer}>
                                <Line options={optionsWeather} data={dataWeatherWind}/>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <div className={classes.lineContainer}>
                                <Line options={optionsWeather} data={dataWeatherWindDir}/>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <div className={classes.lineContainer}>
                                <Line options={optionsWeather} data={dataWeatherPrecip}/>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <div className={classes.lineContainer}>
                                <Line options={optionsWeather} data={dataWeatherPressure}/>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <div className={classes.lineContainer}>
                                <Line options={optionsWeather} data={dataWeatherUV}/>
                            </div>
                        </div>
                        <br/>
                    </div>
                }
                </div>
            </Container>
        </Layout>
    );
}
export default MainDashboardT;