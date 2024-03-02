import { envs } from './config/env.js';
// const { envs } = require('./config/env')
import { starServer } from'./server/server.js';
// const { starserver: starServer } = require('./server/server')

const main = () => {
    console.log('Aqui es donde va el servidor.');
    // console.log(envs);
    starServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}
// Funcion agnostica autoconvocada
// Agnostica por que  no tiene nombre
// Autocompletada porque la ejecucion con los parentesis
(async () => {
    main()
})()