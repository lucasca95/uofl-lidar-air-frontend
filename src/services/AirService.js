import Environment from "../environment";

export const AirService = {
    airDataGET: async (device_id = 2) => {
        const axios = require('axios').default;
        let url = `${Environment.api}get/air/`;
        const getResult = await axios.post(`${url}`, {id: device_id})
        return getResult.data.data[0];
    },

    testAirDataGET: async (data = null) => {
        const result = 
            {
                aqi: 1,
                co: 0,
                temp: 62,
                so2: 0,
                pm: 8,
                pres: 1011,
                no2: 0,
                pm25: 11,
                relHum: 61,
                o3: 10,
                pm10: 11,
                noise: 64,
            }
        ;
        return result;
    },
  };
  
  export default AirService;