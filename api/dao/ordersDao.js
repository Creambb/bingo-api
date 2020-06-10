// 数据访问层，从数据库中查数据
const ChartsModel = require('../model/charts');
const OrdersModel = require('../model/orders');
const SpecsModel = require('../model/goods_specs');

const { Orders, Goods, Charts, Specs } = require('../model/index.js')


const ordersDao = {

    async insertToOrders(options) {
        // User.sync().then(function () {
        // Table created
        return await Orders.create(options).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });
        // });
    },


    async findChartsGoods(where) {
        // User.sync().then(function () {
        // Table created
        return await Charts.findAll({
            where,
            include: [

            ],
        }).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },


    async insertToCharts(options) {
        // User.sync().then(function () {
        // Table created
        return await Charts.create(options).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },


    async updateCharts(obj, where) {
        // User.sync().then(function () {
        // Table created
        return await Charts.update(obj, { where }).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },

    async destroyCharts(where) {
        // User.sync().then(function () {
        // Table created
        return await Charts.destroy({ where }).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },

}

module.exports = ordersDao


