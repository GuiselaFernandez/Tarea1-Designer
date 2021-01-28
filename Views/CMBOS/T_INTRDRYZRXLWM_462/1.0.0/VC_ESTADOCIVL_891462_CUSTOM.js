/* variables locales de T_INTRDRYZRXLWM_462*/

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

    
        var task = designerEvents.api.formestadocivil;
    

    //"TaskId": "T_INTRDRYZRXLWM_462"


    	//Entity: EstadoCivil1
//EstadoCivil1.estadoCivil (ComboBox) View: FormEstadoCivil
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_ESTADOCIVILVKYM_418334 = function (entities, changedEventArgs) {
    if (entities.EstadoCivil1.estadoCivil == "0") {
        changedEventArgs.commons.api.viewState.hide('G_ESTADOCVVI_444334');
        
    }
    if (entities.EstadoCivil1.estadoCivil == "1") {
        changedEventArgs.commons.api.viewState.show('G_ESTADOCVVI_444334');
        entities.EstadoCivil.estadoCivil = "Soltero";
        entities.EstadoCivil.actividad = "Listo para la farra";
        
    }
    if (entities.EstadoCivil1.estadoCivil == "2") {
        changedEventArgs.commons.api.viewState.show('G_ESTADOCVVI_444334');
        entities.EstadoCivil.estadoCivil = "Casado";
        entities.EstadoCivil.actividad = "Lavando los platos";
    }


    changedEventArgs.commons.execServer = false;

};


	//Entity: EstadoCivil
//EstadoCivil. (Button) View: FormEstadoCivil
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONRLINXXQ_407334 = function (entities, executeCommandEventArgs) {
    entities.EstadoCivil1.estadoCivil = "0";
    executeCommandEventArgs.commons.api.viewState.hide('G_ESTADOCVVI_444334');


    executeCommandEventArgs.commons.execServer = false;

};


	
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: FormEstadoCivil
task.render = function (entities, renderEventArgs){
    renderEventArgs.commons.api.viewState.hide('G_ESTADOCVVI_444334');
   

    renderEventArgs.commons.execServer = false;

};



}));
