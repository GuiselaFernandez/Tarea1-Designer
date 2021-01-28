

//Entity: Calculadora
//Calculadora. (Button) View: EventoCalculadora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONLJJYNQV_130506 = function(  entities, executeCommandEventArgs ) {
    
    entities.Calculadora.resultado = entities.Calculadora.numero1 + entities.Calculadora.numero2;

    executeCommandEventArgs.commons.execServer = false;

};