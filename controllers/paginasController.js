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

const paginaViajes = (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    res.render('viajes', { // Render sirve para renderizar una vista PUG.
        pagina: 'Viajes' // Creamos la variable 'pagina' para pasar a la vista PUG.
    });
}

const paginaTestimoniales = (req, res) => { // req - Lo que enviamos | res - Lo que express nos responde.
    res.render('testimoniales', { // Render sirve para renderizar una vista PUG.
        pagina: 'Testimoniales' // Creamos la variable 'pagina' para pasar a la vista PUG.
    });
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}