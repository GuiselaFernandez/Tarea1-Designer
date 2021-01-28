

//Entity: EstadoCivil
//EstadoCivil. (Button) View: FormEstadoCivil
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONRLINXXQ_407334 = function(  entities, executeCommandEventArgs ) {
    entities.EstadoCivil1.estadocivil = "";
executeCommandEventArgs.commons.api.viewState.hide('G_ESTADOCVVI_444334');

    executeCommandEventArgs.commons.execServer = false;

};