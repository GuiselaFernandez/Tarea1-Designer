

//Entity: Persona
//Persona. (Button) View: EventosCliente
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONPMCQTWY_161180 = function(  entities, executeCommandEventArgs ) {
    entities.Persona.nombre= "";
    entities.Persona.apellido= "";
    entities.Persona.nombreCompleto= "";
    executeCommandEventArgs.commons.execServer = false;

};