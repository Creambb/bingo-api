// 数据访问层，从数据库中查数据
const GoodsModel = require('../model/goods');

const goodsDao = {

    async findGoods(attributes) {
        // User.sync().then(function () {
        // Table created
        return await GoodsModel.findAll({
            attributes
        }).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },

}

module.exports = goodsDao


