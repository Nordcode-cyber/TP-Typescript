(() =>{
    enum DiasDeLaSemana {
        Lunes,
        Martes,
        Miercoles,
        Jueves,
        Viernes,
        Sabado,
        Domingo
      }
      let diaDeHoy: DiasDeLaSemana = DiasDeLaSemana.Martes;
      let maniana: DiasDeLaSemana = DiasDeLaSemana.Domingo;
      console.log(DiasDeLaSemana);
      console.log(typeof DiasDeLaSemana);
      console.table(DiasDeLaSemana);
    console.log(diaDeHoy);//devuelve ubicacion 
    console.log(maniana);
    enum MesesDelAnio {
      Enero,
      Febrero,
      Marzo,
      Abril,
      Mayo,
      Junio,
      Julio,
      Agosto,
      Septiembre,
      Octubre,
      Noviembre,
      Diciembre
    }
    let mesActual: MesesDelAnio = MesesDelAnio.Mayo;
    let mesAnterior: MesesDelAnio = MesesDelAnio.Abril;
    console.log(MesesDelAnio);
    console.table(MesesDelAnio);
    console.log(typeof MesesDelAnio);
    console.log(mesActual);
    console.log(mesAnterior);
    enum AutosFord{
      Fiesta,
      Focus,
      Mustang,
      Bronco,
      Kuga
    }
    console.table(AutosFord);
    console.log(AutosFord.Fiesta);
    enum Langc {
      embebides,
      hardware,
      so,
      compiladores,
      shell,
      games,
      framework
    }
    let gcc:Langc=Langc.compiladores;
    let arduino:Langc=Langc.embebides;
    let x486:Langc=Langc.hardware;
    let linux:Langc=Langc.so;
    let git:Langc=Langc.shell;
    let gtk:Langc=Langc.framework;
    let dom:Langc=Langc.games;
    console.table(Langc)
    console.log(typeof Langc)
    console.log(Langc.compiladores)
    console.log(Langc.framework)
    console.log(Langc.shell)
    console.log(typeof Langc.shell)
    enum Langpy {
      games,
      web,
      mobile,
      desktop,
      infosec,
      inteart
    }
    let damnet:Langpy.games;
    let django:Langpy.web;
    let qpython:Langpy.mobile;
    let pyqt:Langpy.desktop;
    let blueye:Langpy.infosec;
    let gemini:Langpy.inteart;
    console.table(Langpy)
    console.log(typeof Langpy)
    console.log(Langpy.desktop)
    console.log(Langpy.mobile);
})()