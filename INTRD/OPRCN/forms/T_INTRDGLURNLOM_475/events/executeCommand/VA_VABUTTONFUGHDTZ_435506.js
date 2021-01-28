

//Entity: Calculadora
//Calculadora. (Button) View: EventoCalculadora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONFUGHDTZ_435506 = function(  entities, executeCommandEventArgs ) {
    
    entities.Calculadora.numero1= "";
    entities.Calculadora.numero2= "";
    entities.Calculadora.resultado= "";

    executeCommandEventArgs.commons.execServer = false;

};