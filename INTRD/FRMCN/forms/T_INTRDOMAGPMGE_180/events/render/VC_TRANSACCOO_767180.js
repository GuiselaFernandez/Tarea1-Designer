//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: Transaccion
task.render = function (entities, renderEventArgs) {

    entities.CuentaOrigen.numeroCuenta = 2212333;
    entities.CuentaDestino.numeroCuenta = 2212345;
    entities.CuentaOrigen.saldo = 2000;
    entities.CuentaDestino.saldo = 1000;

    renderEventArgs.commons.execServer = false;

};
