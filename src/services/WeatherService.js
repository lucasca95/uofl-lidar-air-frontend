export const WeatherService = {
    weatherDataGET: async (data = null) => {
        const result = [];
        let i = 0;
        while (i < 10){
            result[i] = {
            temp: Math.floor(Math.random()*30+65),
            dewPoint: Math.floor(Math.random()*10+45),
            windSpeed: (Math.random()*10+1),
            windGust: (Math.random()*10+1),
            windDir: Math.floor(Math.random()*360+0),
            precipAccTot: 0,
            precipRate: Math.random(),
            pressure: (Math.random()*0.16+30.08),
            UvIndex: (Math.random()*11+0),
            }
            i++;
        }
        result[0].precipAccTot = result[0].precipRate;
        i = 1;
        while (i < result.length){
            result[i].precipAccTot = result[i-1].precipAccTot + result[i].precipRate;
            i++;
        }
        return result;
    },
};
  
export default WeatherService;