// Modulos
const colors = require('colors');
const cors = require('cors');
const express = require('express');
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
// Settings 
app.set('port', process.env.PORT || 3000);

// Routes
app.use('/api/employees',require('./routes/employees'))

// Starting the serve
app.listen(app.get('port'), () => {
    console.log('Server on port'.blue,app.get('port'));
});