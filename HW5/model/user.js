Users = function(app, mongo) {

    Users.prototype.addUser = function() {
        console.log("add user");
    };

    Users.prototype.getAll = function() {

        return "all users " + mongo.dbUsers;

    };
};

module.exports = Users;
