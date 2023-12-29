const simuladorPrestamos = {
    historial: [],

    calcularCredito: function () {
        const montoPrestamo = parseFloat(document.getElementById('monto').value);
        const numeroCuotas = parseInt(document.getElementById('cuotas').value);

        const tasaInteresAnual = 3.27;
        const tasaInteresMensual = (tasaInteresAnual / 12) / 100;

        const cuotaMensual = this.calcularCuotaMensual(montoPrestamo, tasaInteresMensual, numeroCuotas);
        const totalDevuelto = cuotaMensual * numeroCuotas;

        this.mostrarResultadoEnPagina(cuotaMensual, totalDevuelto);

        this.historial.push({
            montoPrestamo: montoPrestamo,
            numeroCuotas: numeroCuotas,
            cuotaMensual: cuotaMensual,
            totalDevuelto: totalDevuelto
        });
    },

    calcularCuotaMensual: function (monto, tasa, cuotas) {
        return (monto * tasa) / (1 - Math.pow(1 + tasa, -cuotas));
    },

    mostrarResultadoEnPagina: function (cuota, totalDevuelto) {
        const outputContainer = document.getElementById('output-container');

        const resultadoHTML = `
            <p>Cuota mensual: ${cuota.toFixed(2)}</p>
            <p>Total devuelto: ${totalDevuelto.toFixed(2)}</p>
        `;

        outputContainer.innerHTML = resultadoHTML;
    },
};


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('simuladorForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        simuladorPrestamos.calcularCredito();
    });
});
