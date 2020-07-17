const express = require('express'); //grants access to express library
const app = express();

app.get('/greeting', (req,res) => { //get route handler
    res.send({hi: 'there'}); 
})

const PORT = process.env.PORT || 5000; //dynamic port for heroku
app.listen(PORT); 