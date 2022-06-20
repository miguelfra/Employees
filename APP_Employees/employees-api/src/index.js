// Modulos
const colors = require('colors');
const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Settings
app.set('port', process.env.PORT || 3000)

// Routes
app.use('/api-employes',require('./routes/employees'))

// Starting the serve
app.listen(app.get('port'), () => {
    console.log('Server on port'.blue,app.get('port'));
});