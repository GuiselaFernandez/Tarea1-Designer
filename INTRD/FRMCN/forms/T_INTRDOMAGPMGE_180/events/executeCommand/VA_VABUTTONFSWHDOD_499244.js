

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