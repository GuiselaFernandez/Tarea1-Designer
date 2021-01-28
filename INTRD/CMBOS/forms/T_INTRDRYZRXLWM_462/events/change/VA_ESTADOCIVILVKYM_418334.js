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
