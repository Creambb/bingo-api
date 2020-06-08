// 数据访问层，从数据库中查数据
const ChartsModel = require('../model/charts');
const GoodsModel = require('../model/goods');
const SpecsModel = require('../model/goods_specs');


const chartsDao = {

    async findCharts(where) {
        // User.sync().then(function () {
        // Table created
        return await ChartsModel.findAll({
            where,
        }).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },


    async findChartsGoods(where) {
        // User.sync().then(function () {
        // Table created
        return await ChartsModel.findAll({
            where,
            include: [
                { // include关键字表示关联查询
                    model: GoodsModel, // 指定关联的model
                    attributes: ['goodsName', 'goodsImg', 'shopPrice'], // 这里的attributes属性表示查询class表的name和rank字段，其中对name字段起了别名className
                },
                { // include关键字表示关联查询
                    model: SpecsModel, // 指定关联的model
                    attributes: ['goodsSpecs', 'goodsStock'], // 这里的attributes属性表示查询class表的name和rank字段，其中对name字段起了别名className
                }
            ],
        }).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },


    async updateCharts(obj, where) {
        // User.sync().then(function () {
        // Table created
        return await ChartsModel.update(obj, { where }).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },

    async insertToCharts(options) {
        // User.sync().then(function () {
        // Table created
        return await ChartsModel.create(options).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },

}

module.exports = chartsDao


