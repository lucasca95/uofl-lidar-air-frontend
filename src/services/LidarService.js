export const LidarService = {
    lidarDataGET: async (data = null) => {
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