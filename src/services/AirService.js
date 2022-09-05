export const AirService = {
    airDataGET: async (data = null) => {
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