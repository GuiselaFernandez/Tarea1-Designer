

//Entity: Persona
//Persona. (Button) View: EventosCliente
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONBODJTTP_438180 = function(  entities, executeCommandEventArgs ) {
    entities.Persona.nombreCompleto=entities.Persona.nombre +" " +entities.Persona.apellido;
    

    executeCommandEventArgs.commons.execServer = false;

};