const { App } = require('./app');
const env = process.env.NODE_ENV || "development";
const  config  = require('./configuration')[env];

const app = new App(config);
app.bootstrap()
.then(() => app.start(()=>{}) );