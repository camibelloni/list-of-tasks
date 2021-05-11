const fs = require('fs');

/**
 * Módulo de tareas
 */

/* La propiedad nombreDelArchivo contendrá el nombre del archivo json con las tareas.*/
const nombreDelArchivo = './tareas.json';

/*  El método leerArchivo utilizará el módulo nativo fs para 
leer el contenido del archivo, en base a la constante nombreDelArchivo */
const leerArchivo = () => {
    return fs.readFileSync(nombreDelArchivo);
};

/*  El método parsearTextoEnJSON intentará parsear el parámetro textoJSON recibido */
const parsearTextoEnJSON = (textoJSON) => {
    return JSON.parse(textoJSON)
}
/*  El método listar tareas será el único exportado por el módulo, que utilizará los demás
para devolver las tareas ya parseadas (como un array) */

const listarTareas = () => {
    // primero, obtengo el contenido con leerArchivo, que buscará el archiv
    const textoEnJSON = leerArchivo();
    const tareasParseadas = parsearTextoEnJSON(textoEnJSON);
    return tareasParseadas;
};

// En module.exports solo exportamos lo que necesitarán otros módulos, por ahora listarTareas
module.exports = {listarTareas}