module.exports = {
    devServer: {
        before: (app, server) => {
            // Esta es una api hecha en el BACK END.
            app.get('/data/catalogo.json', (req, res) => {
                console.log(req.query);
                const result = require('./src/assets/catalogo.json');
                let seleccion = [];
                console.log(result);
                if ('cantidadmaxima' in req.query) {
                    let max = Math.min(+req.query.cantidadmaxima, result.length);
                    for (let i = 0; i < max; i++) {
                        seleccion.push(result[i]);
                    }
                } else {
                    seleccion = result;
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(seleccion));
            })
        }
    }
}