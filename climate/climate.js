const axios = require('axios');

const getClimate = async(lat, lng) => {
    let resp = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&units=metric&appid=e95c6f8277a535c53a2e07596926478a')

    return resp.data.main.temp;
}

module.exports = {
    getClimate,
}