const GoogleStrategy = require('passport-google-oauth20').Strategy;
let passport = require('passport');
const google = require('./config/AuthTogether').google;
// const mongod = require('mongoUtil');
// db = mongod.getDb();
// db.collection('users').find();
// const User =
// Configure Google Strategy by using passport
passport.use(new GoogleStrategy(
        google
,
    async (accessToken, refreshToken, profile, cb) =>{
        // In this example, the user's Facebook profile is supplied as the user
        // record.  In a production-quality application, the Facebook profile should
        // be associated with a user record in the application's database, which
        // allows for account linking and authentication with other identity
        // providers.
        // const existingUser = await User.findOne({googleId: profile.id});
        // if (existingUser)
        //     return cb(null, existingUser);
        // const user = await new User({ googleId: profile.id }).save();
        return cb(null, profile);
    }));

// Configure Passport authenticated session persistence.

// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    // TODO: look up user in the mongodb and place one the 'user' information
    cb(null, obj);
});

