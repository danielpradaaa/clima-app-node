const place = require('./place/place');
const climate = require('./climate/climate');
const argv = require('yargs').options({
    direction: {
        alias: 'd',
        description: 'City to search',
        demand: true,
    }
}).argv;

console.log('Parámetro ingresado: ' + argv.direction);

// place.get_Lat_Long(argv.direction).then(resp => console.log(resp)).catch(e => console.log(e));
/* climate.getClimate(11.227466, -74.174858)
    .then(temperatura => console.log('La temperatura en ' + argv.direction + ' es: ' + temperatura))
    .catch(e => console.log(e)); */

let getInfo = async(direction) => {
    try {
        let coordenadas = await place.get_Lat_Long(direction);
        let temperatura = await climate.getClimate(coordenadas.Latitud, coordenadas.Longitud);
        return 'El clima en ' + coordenadas.dirección + ' es de ' + temperatura;
    } catch (error) {
        return 'No se encontraron resultados para "' + direction + '".';
    }
}

getInfo(argv.direction).then(mensage => console.log(mensage)).catch(e => console.log(e));