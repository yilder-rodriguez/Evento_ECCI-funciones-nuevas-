(function () {

    const boton = document.getElementById('botonTema');
    const temaGuardado = localStorage.getItem('tema');

    if (temaGuardado === 'oscuro') {
        document.documentElement.classList.add('tema-oscuro');
    }

    boton.addEventListener('click', function () {

        document.documentElement.classList.toggle('tema-oscuro');

        const temaActual = document.documentElement.classList.contains('tema-oscuro')
            ? 'oscuro'
            : 'claro';

        localStorage.setItem('tema', temaActual);

    });

})();