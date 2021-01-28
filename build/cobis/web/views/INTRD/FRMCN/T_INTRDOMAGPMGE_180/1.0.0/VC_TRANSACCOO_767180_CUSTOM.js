/* variables locales de T_INTRDOMAGPMGE_180*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.transaccion;
    

    //"TaskId": "T_INTRDOMAGPMGE_180"


    	

//Entity: CuentaOrigen
//CuentaOrigen. (Button) View: Transaccion
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONFSWHDOD_499244 = function(  entities, executeCommandEventArgs ) {
   
    
    if(entities.CuentaOrigen.saldo>=entities.CuentaOrigen.valorTransferencia){
        executeCommandEventArgs.commons.messageHandler.showMessagesSuccess("Transaccion correcta");
    entities.CuentaOrigen.saldo= entities.CuentaOrigen.saldo-entities.CuentaOrigen.valorTransferencia;
    entities.CuentaDestino.saldo= entities.CuentaDestino.saldo+entities.CuentaOrigen.valorTransferencia;
    }else{
        executeCommandEventArgs.commons.messageHandler.showMessagesError("Saldo insuficiente");
    }
    

    executeCommandEventArgs.commons.execServer = false;

};

	//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: Transaccion
task.render = function (entities, renderEventArgs) {

    entities.CuentaOrigen.numeroCuenta = 2212333;
    entities.CuentaDestino.numeroCuenta = 2212345;
    entities.CuentaOrigen.saldo = 2000;
    entities.CuentaDestino.saldo = 1000;

    renderEventArgs.commons.execServer = false;

};




}));
