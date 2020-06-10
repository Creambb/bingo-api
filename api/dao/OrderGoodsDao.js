// 数据访问层，从数据库中查数据
const ChartsModel = require('../model/charts');
const OrdersModel = require('../model/orders');
const SpecsModel = require('../model/goods_specs');

const { Orders, OrderGoods, Charts, Specs } = require('../model/index.js')


const ordersDao = {

    async insertToOrders(options) {
        // User.sync().then(function () {
        // Table created
        return await OrderGoods.create(options).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });
        // });
    },

}


module.exports = ordersDao


