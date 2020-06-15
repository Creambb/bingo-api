// 数据访问层，从数据库中查数据
// 数据访问层，从数据库中查数据
const { Users } = require('../model/index.js')

const Users = {

    async insertUsers(options) {
        // User.sync().then(function () {
        // Table created
        return await User.create(options).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },

    async findCats(attributes) {
        // User.sync().then(function () {
        // Table created
        return await Cats.findAll({
            attributes
        }).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },

}

module.exports = Users


