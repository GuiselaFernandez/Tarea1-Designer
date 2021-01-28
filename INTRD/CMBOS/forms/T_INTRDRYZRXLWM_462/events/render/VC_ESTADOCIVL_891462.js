
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: FormEstadoCivil
task.render = function (entities, renderEventArgs){
    renderEventArgs.commons.api.viewState.hide('G_ESTADOCVVI_444334');
   

    renderEventArgs.commons.execServer = false;

};