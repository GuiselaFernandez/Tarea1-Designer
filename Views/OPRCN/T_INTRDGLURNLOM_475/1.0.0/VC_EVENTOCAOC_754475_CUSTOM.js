/* variables locales de T_INTRDGLURNLOM_475*/

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

    
        var task = designerEvents.api.eventocalculadora;
    

    //"TaskId": "T_INTRDGLURNLOM_475"


    	

//Entity: Calculadora
//Calculadora. (Button) View: EventoCalculadora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONFUGHDTZ_435506 = function(  entities, executeCommandEventArgs ) {
    
    entities.Calculadora.numero1= "";
    entities.Calculadora.numero2= "";
    entities.Calculadora.resultado= "";

    executeCommandEventArgs.commons.execServer = false;

};

	

//Entity: Calculadora
//Calculadora. (Button) View: EventoCalculadora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONLJJYNQV_130506 = function(  entities, executeCommandEventArgs ) {
    
    entities.Calculadora.resultado = entities.Calculadora.numero1 + entities.Calculadora.numero2;

    executeCommandEventArgs.commons.execServer = false;

};



}));
