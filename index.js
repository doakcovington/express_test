const express = require('express'); //grants access to express library
const passport = require(`passport`);
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy()); //creates a new instance of GoogleStrategy auth

const PORT = process.env.PORT || 5000; //dynamic port for heroku
app.listen(PORT); 