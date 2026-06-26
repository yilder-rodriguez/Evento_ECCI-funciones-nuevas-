function cambiarIdioma(lang, boton) {

    document.querySelectorAll('.bloque-idioma').forEach(function(bloque) {
        bloque.classList.remove('visible');
    });

    document.querySelectorAll('.tab-idioma').forEach(function(tab) {
        tab.classList.remove('activo');
    });

    document
        .getElementById('texto-' + lang)
        .classList.add('visible');

    boton.classList.add('activo');
}