const secciones = document.querySelectorAll('section[id]');
const enlaces = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {

    let actual = '';

    secciones.forEach(function (seccion) {

        if (window.scrollY >= seccion.offsetTop - 100) {
            actual = seccion.id;
        }

    });

    enlaces.forEach(function (enlace) {

        enlace.classList.remove('active');

        if (enlace.getAttribute('href') === '#' + actual) {
            enlace.classList.add('active');
        }

    });

});