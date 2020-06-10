// 数据访问层，从数据库中查数据
const catsModel = require('../model/goods_cats');
const { Cats, Goods } = require('../model/index.js')

const catsDao = {

    async findCatsGoods(attributes) {
        // User.sync().then(function () {
        // Table created
        return await Cats.findAll({
            attributes,
            include: [
                { // include关键字表示关联查询
                    model: Goods, // 指定关联的model
                    as: 'goodsList', // 别名
                    attributes: ['goodsId', 'goodsName', 'goodsImg', 'catId', 'brandId', 'isSale', 'isOffSale', 'shopPrice', 'saleNum', 'attributeList'],
                },
            ],
        }).then(function (projects) {
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

module.exports = catsDao


