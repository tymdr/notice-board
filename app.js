const express=require('express');
const app=express();
const routes=require('./routes');

app.set('view engine','twig');
app.use('/', routes);

const port = 5050;
app.use(express.static(__dirname + '/public'));


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})