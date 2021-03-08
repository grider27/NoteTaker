// dependencies listed here
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require('./routes/api-routes.js')(app); 
require('./routes/html-routes.js')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
