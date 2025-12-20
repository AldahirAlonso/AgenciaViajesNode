import { Viaje } from '../models/Viaje.js';

const paginaInicio = (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    res.render('inicio', { // Render sirve para renderizar una vista PUG.
        pagina: 'Inicio' // Creamos la variable 'pagina' para pasar a la vista PUG.
    })
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

const paginaTestimoniales = (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    res.render('testimoniales', { // Render sirve para renderizar una vista PUG.
        pagina: 'Testimoniales' // Creamos la variable 'pagina' para pasar a la vista PUG.
    });
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