// Utilizaremos este módulo para obtener las tareas en base a la lógica que contiene (ver archivo)
let moduloTareas = require('./tareas');
// con process.argv obtengo un array de los comandos que se ejecutaron en consola
// por ejemplo para el comando: node app.js listar
// La posición [0] de process.argv será node
// La posición [1] de process.argv será app.js
// La posición [2] de process.argv será listar
// Esta posición [2] será lo que este código interpretará como acción a realizar
let accion = process.argv[2];

switch(accion) {
    // Caso para node app.js listar
    case 'listar':
        console.log('Listado de tareas');
        // En la variable tareas tendremos el resultado de invocar al método listarTareas del módulo
        // qué, si salió todo bien, es el array de tareas leido y parseado desde el archivo JSON
        let tareas = moduloTareas.listarTareas();
        
        // con forEach() itero (repito una operación) por cada tarea 
        // con el objetivo de mostrar su título y estado en consola
        tareas.forEach(tarea => {
            // Llamaré tarea (parámetro arriba) a cada elemento del array tareas
            // Para poder mostrar su título y estado de forma individual
            console.log('Título: ' + tarea.titulo + ' - Estado: ' + tarea.estado);
        });

        break;
        case 'crear':
            console.log('Crear nueva tarea');
            const nombreTarea = process.argv[3];
            let tarea = {
                titulo: nombreTarea,
                estado: 'pendiente'
            }
            moduloTareas.agregarNuevaTarea(tarea)
            // En la variable tareas tendremos el resultado de invocar al método listarTareas del módulo
            // qué, si salió todo bien, es el array de tareas leido y parseado desde el archivo JSON
           // let tareas = moduloTareas.listarTareas();
            
            // con forEach() itero (repito una operación) por cada tarea 
            // con el objetivo de mostrar su título y estado en consola
           
    
            break;

    // Caso para node app.js 
    // (Sin acción, por eso undefined)
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    // node app.js jadskasddas
    // Se envía una acción pero no hay lógica para la misma
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}