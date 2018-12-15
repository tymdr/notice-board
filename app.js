const express=require('express');
const app=express();
const config=require('./config');
const routes=require('./routes');
const twig=require('twig');

app.set('view engine','twig');
twig.cache(config.production);
app.use('/', routes);

const port = config.port;
app.use(express.static(__dirname + '/public'));


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})