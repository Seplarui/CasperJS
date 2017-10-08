casper= require("casper").create();

casper.start("http://www.google.es");

casper.then(function() {
    casper.echo("Pagina cargada con exito");
    //captura pantalla
    casper.capture("google.png");
});


casper.run();