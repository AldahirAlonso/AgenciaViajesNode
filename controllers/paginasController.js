import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.

    // Consultar 3 viajes del modelo Viaje

    const promiseDB = [];

    promiseDB.push( Viaje.findAll({ limit: 3 }) );
    promiseDB.push( Testimonial.findAll({ limit: 3 }) );

    try {
        const resultado = await Promise.all( promiseDB )

        res.render('inicio', { // Render sirve para renderizar una vista PUG.
            pagina: 'Inicio', // Creamos la variable 'pagina' para pasar a la vista PUG.
            clase: 'home',
            viajes: resultado[0],
            testimoniales : resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaNosotros = (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    res.render('nosotros', { // Render sirve para renderizar una vista PUG.
        pagina: 'Nosotros' // Creamos la variable 'pagina' para pasar a la vista PUG.
    });
}

const paginaViajes = async (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    // Consultar BD
    const viajes = await Viaje.findAll(); // 

    console.log(viajes);

    res.render('viajes', { // Render sirve para renderizar una vista PUG.
        pagina: 'Próximos Viajes',  // Creamos la variable 'pagina' para pasar a la vista PUG.
        viajes,
    });
}

const paginaTestimoniales = async (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.

    try {
        const testimoniales = await Testimonial.findAll(); // Consultar los testimoniales que estan en la BD.

        res.render('testimoniales', { // Render sirve para renderizar una vista PUG.
            pagina: 'Testimoniales', // Creamos la variable 'pagina' para pasar a la vista PUG.    
            testimoniales
        });
    } catch (error) {
        console.log(error)
        
    }

}

// Muestra un viaje por su slug.
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne( { where : { slug }});

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}