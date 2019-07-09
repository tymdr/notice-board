const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const routes = require('./routes');
const twig = require('twig');
const app = express();

twig.cache(config.production);
app.set('view engine', 'twig');
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);


app.use(express.static(__dirname + '/public'));
const port = config.port;

// Connect to MongoDB and then start the server, fail otherwise
mongoose.connect(config.mongoUri).then(() => {
    app.listen(port, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log(`Server started at port ${port}`);
    });
}).catch(err => console.error(err));