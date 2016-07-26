var static = require( 'node-static' ),
    port = 8000,
    http = require( 'http' );

// config
var repo_path = "/home/santhoshl/Documents/js/reactjs"

var file = new static.Server( repo_path, {
    cache: 3600,
    gzip: true
} );

// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( port );
