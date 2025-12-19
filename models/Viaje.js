import Sequelize from 'sequelize'; // Importar Sequelize para definir el modelo.
import db from '../config/db.js'; // Importar la instancia de Sequelize configurada para la base de datos.

// Definir el modelo "Viaje" con sus respectivos campos y tipos de datos.

export const Viaje = db.define('viajes', { // Definir un objeto modelo llamado "Viaje" que representa la tabla "viajes" en la base de datos.
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
 });