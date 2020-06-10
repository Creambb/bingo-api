// 数据访问层，从数据库中查数据
const GoodsModel = require('../model/goods');
const { Goods } = require('../model/index.js')


const goodsDao = {

    async findGoods(attributes) {
        // User.sync().then(function () {
        // Table created
        return await Goods.findAll({
            attributes,
        }).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },

}

module.exports = goodsDao


