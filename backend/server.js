// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const vendorRoutes = require('./routes/vendors');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/vendorDB', { useNewUrlParser: true, useUnifiedTopology: true });

const Vendor = require('./models/vendor');

passport.use(new GoogleStrategy({
    clientID: '1028161243034-87qh3knlb315ruolatspvqkmk900vbpl.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Handle user creation/login logic here
}));

app.use('/api', vendorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
