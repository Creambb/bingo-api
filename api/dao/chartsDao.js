// 数据访问层，从数据库中查数据
const ChartsModel = require('../model/charts');
const GoodsModel = require('../model/goods');
const SpecsModel = require('../model/goods_specs');

const { Goods, Charts, Specs } = require('../model/index.js')


const chartsDao = {

    async findCharts(where) {
        // User.sync().then(function () {
        // Table created
        return await Charts.findAll({
            where,
        }).then(function (projects) {
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
                { // include关键字表示关联查询
                    model: Goods, // 指定关联的model
                    as: 'goodsDetail', // 别名                                            
                    attributes: ['goodsName', 'goodsImg', 'shopPrice'],
                },
                { // include关键字表示关联查询
                    model: Specs, // 指定关联的model
                    as: 'specsDetail', // 别名                        
                    attributes: [['id', 'specsId'], 'goodsSpecs', 'goodsStock'],
                }
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

module.exports = chartsDao


