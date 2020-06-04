const User = require('../models/userModel');

const userService = {
    create() {
        User.sync().then(function () {
            // Table created
            return User.create({
                firstName: 'John',
                lastName: 'Hancock'
            });
        });
    },
    findAll() {
        // User.sync().then(function () {
        // Table created
        return User.findAll();
        // });
    },

}

module.exports = userService


