const express = require('express'); //grants access to express library
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app); 


const PORT = process.env.PORT || 5000; //dynamic port for heroku
app.listen(PORT); 