const express = require('express'); //grants access to express library
const app = express();

app.get('/', (req,res) => {
    res.send({hi: 'there'}); //get route handler
})

app.listen(5000);