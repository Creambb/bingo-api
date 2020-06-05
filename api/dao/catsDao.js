// 数据访问层，从数据库中查数据
const catsModel = require('../model/goods_cats');

const catsDao = {

    async findCats(attributes) {
        // User.sync().then(function () {
        // Table created
        return await catsModel.findAll({
            attributes
        }).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },

}

module.exports = catsDao


