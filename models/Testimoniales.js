import Sequelize from 'sequelize'; // Importar Sequelize para definir el modelo.
import db from '../config/db.js'; // Importar la instancia de Sequelize configurada para la base de datos.

// Definir el modelo "Testimonial" con sus respectivos campos para que se guarde en la BD.

export const Testimonial = db.define('testimoniales', { // Definir un objeto modelo llamado "Viaje" que representa la tabla "viajes" en la base de datos.
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
 });