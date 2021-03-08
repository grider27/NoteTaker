// dependencies listed here
const express = require('express');
//const logger = require('./middleware/logger'); // enable if you would like to log all calls

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//app.use(logger); //enable if you would like to log all calls

//routes
require('./routes/api-routes.js')(app); 
require('./routes/html-routes.js')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
