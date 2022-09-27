import Environment from "../environment";


export const LidarService = {
    lidarDataGET: async (device_id = 2) => {
        const axios = require('axios').default;
        let url = `${Environment.api}get/lidar/`;
        const getResult = await axios.post(`${url}`, {id: device_id})
        return getResult.data;
    },

    testLidarDataGET: async (data = null) => {
        let i = 0;
        const result = [];
        while (i<15){
            result[result.length] = {
                people: Math.floor(Math.random() * 10),
                vehicles: Math.floor(Math.random() * 5)
            }
            i++;
        }
        
        return result;
    },
};

export default LidarService;