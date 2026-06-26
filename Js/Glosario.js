function filtrarGlosario() {

    const texto = document
        .getElementById('buscadorGlosario')
        .value
        .toLowerCase();

    const filas = document.querySelectorAll(
        '#tablaGlosario tbody tr'
    );

    filas.forEach(function(fila) {

        fila.style.display = fila.textContent
            .toLowerCase()
            .includes(texto)
            ? ''
            : 'none';

    });

}