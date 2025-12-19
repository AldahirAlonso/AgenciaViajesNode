import Sequelize from 'sequelize'; // Importar Sequelize para la gestión de bases de datos.

// Configuración de la conexión a la base de datos MySQL.
const db = new Sequelize('agenciaviajes', 'node_user', 'admin1234567', { // Crear una instancia de Sequelize para conectarse a la base de datos.
    host: '172.18.16.1', // Host de la base de datos.
    port: '3306',
    dialect: 'mysql', // Tipo de base de datos.
    define: { // define sirve para definir opciones globales para todos los modelos.
        timestamps: false // timestamps sirve para que Sequelize no cree automáticamente los campos createdAt y updatedAt en las tablas.
    },
    pool: { // pool sirve para definir opciones de conexión por ejemplo, número máximo de conexiones.
        max: 5, // Número máximo de conexiones en el pool.
        min: 0, // Número mínimo de conexiones en el pool.
        acquire: 30000, // Tiempo máximo (en ms) que Sequelize intentará obtener una conexión antes de lanzar un error.
        idle: 10000 // Tiempo máximo (en ms) que una conexión puede estar inactiva antes de ser liberada.
    },
    operatorsAliases: false // Deshabilitar los alias de operadores para evitar advertencias de seguridad.
});

export default db; // Exportar la instancia de Sequelize para usarla en otros archivos.