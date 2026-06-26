window.addEventListener('load', function () {

    const alerta = document.createElement('div');

    alerta.className = 'alerta-custom';

    alerta.innerHTML = 'Bienvenido a Moda ECCI';

    document.body.appendChild(alerta);

    setTimeout(function () {

        alerta.style.opacity = '0';

        setTimeout(function () {
            alerta.remove();
        }, 500);

    }, 3000);

});