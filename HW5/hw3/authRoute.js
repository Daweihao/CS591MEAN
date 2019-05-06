let express = require('express');
const passport = require('passport');
let router = express.Router();

router.get('/google',passport.authenticate('google',{
    scope: ['profile','email']

}));

router.get('/google/callback', passport.authenticate('google', {successRedirect: 'http://localhost:4200/user',
    failureRedirect: "http://localhost:4200/home"}));

// function handleRedirect(req, url) {
//     const request
// }
module.exports = router;
