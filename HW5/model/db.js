var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost:27017/meanAuth';

require('./user');
const User = mongoose.model('user');
mongoose.connect(dbURI).then(()=>{
    User.remove({}, function (err) {
        if (err){
            console.log(err);
            process.exit();
        }
        console.log('users collection removed!');
        initial();

    })
});

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
function initial(){

    let users = [
        {
            name: "Joe",
            email: "Thomas@gsafni.com",
            location: "New York"
        },
        {
            name: "Peter",
            email: "persaf@gasdf.com",
            location: "San Francisco"
        },
        {
            name: "Lauren",
            email: "lauaeru@gmail.com",
            location: "Chicago"
        },
        {
            name: "Mary",
            email: "masyeqwr@153.com",
            location: "Beijing"
        },
        {
            name: "David",
            email: "newshine@163.com",
            location: "London"
        },
        {
            name: "Holly",
            email: "hollyidwe@outlook.com",
            location: "San Jose"
        },
    ];

    // Init data -> save to MongoDB

    for (let i = 0; i < users.length; i++) {
        const user = new User(users[i]);
        user.save();
    }

    console.log(">>> Done - Initial Data!");
}
// BRING IN YOUR SCHEMAS & MODELS

