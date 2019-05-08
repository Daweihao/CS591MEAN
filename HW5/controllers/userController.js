// const User = require('../model/user');
const mongoose = require('mongoose');
const User = mongoose.model('user');
// POST a User

exports.create = (req, res) => {
    // Create a User
    const user = new User(req.body);

    // Save a User in the MongoDB
    user.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
};


// FETCH all Users
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};


// FIND a User
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    msg: "User not found with id " + req.params.userId
                });
            }
            res.json(user);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).json({
            msg: "Error retrieving User with id " + req.params.userId
        });
    });
};

// UPDATE a User
exports.update = (req, res) => {
    // Find user and update it
    User.findByIdAndUpdate(req.body._id, req.body, {new: true})
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    msg: "User not found with id " + req.params.userId
                });
            }
            res.json(user);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).json({
            msg: "Error updating user with id " + req.params.userId
        });
    });
};

// DELETE a User
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    msg: "User not found with id " + req.params.userId
                });
            }
            res.json({msg: "User deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).json({
            msg: "Could not delete user with id " + req.params.userId
        });
    });
};
