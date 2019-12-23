const express = require('express');
const { initializeRoutes } = require('./routes/index.js');
const bodyParser = require('body-parser');

class App{
    constructor(configuration){
        this.app = express();
        this.conf  = configuration;
        this.router = express.Router()
    }

    async bootstrap(){
        
        initializeRoutes(this.router);
        this.app.use(bodyParser());
        this.app.use(this.router);        
        return Promise.resolve();
    }

    start(cb){
        console.log(`Starting Web Server ${this.conf.port}`);
        this.app.listen(this.conf.port,cb());
    }
}

module.exports = {App}