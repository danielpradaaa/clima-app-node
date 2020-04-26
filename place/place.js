const axios = require('axios');

const get_Lat_Long = async(direction) => {
    // Hacer url amigable con html
    let encodedURL = encodeURI(direction);

    let resp = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedURL + '&key=AIzaSyCslyGJFMXUqUa3TFYggIw52FLaJeQe0Mk')

    if (resp.data.status === 'ZERO_RESULTS') throw new Error('No hay resultados para la búsqueda de "' + direction + '".')

    return {
        dirección: resp.data.results[0].formatted_address,
        Latitud: resp.data.results[0].geometry.location.lat,
        Longitud: resp.data.results[0].geometry.location.lng,
    }
}

module.exports = {
    get_Lat_Long,
}