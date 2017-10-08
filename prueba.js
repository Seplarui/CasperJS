casper= require("casper").create();

casper.start("http://www.google.es");

casper.viewport(1200,720);

casper.then(function() {
    casper.echo("Pagina cargada con exito");
    //captura pantalla
    //casper.capture("google.png");


    casper.fill('form[action="/search"]', {
        q: 'casperjs'

    }, true);

});

casper.then(function(){
    casper.capture("google.png",{top:0, left:0, width:1200, height:720});
});


casper.run();