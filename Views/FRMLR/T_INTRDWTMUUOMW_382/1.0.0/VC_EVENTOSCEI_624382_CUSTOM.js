/* variables locales de T_INTRDWTMUUOMW_382*/

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

    
        var task = designerEvents.api.eventoscliente;
    

    //"TaskId": "T_INTRDWTMUUOMW_382"


    	

//Entity: Persona
//Persona. (Button) View: EventosCliente
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONBODJTTP_438180 = function(  entities, executeCommandEventArgs ) {
    entities.Persona.nombreCompleto=entities.Persona.nombre +" " +entities.Persona.apellido;
    

    executeCommandEventArgs.commons.execServer = false;

};

	

//Entity: Persona
//Persona. (Button) View: EventosCliente
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONPMCQTWY_161180 = function(  entities, executeCommandEventArgs ) {
    entities.Persona.nombre= "";
    entities.Persona.apellido= "";
    entities.Persona.nombreCompleto= "";
    executeCommandEventArgs.commons.execServer = false;

};



}));
