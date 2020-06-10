// 数据访问层，从数据库中查数据
const SpecsModel = require('../model/goods_specs');
const { Specs } = require('../model/index.js')

const SpecsDao = {

    async findSpecs(attributes, where) {
        // User.sync().then(function () {
        // Table created
        return await Specs.findAll({
            attributes,
            where
        }).then(function (projects) {
            return JSON.parse(JSON.stringify(projects));
        });;
        // });
    },

}

module.exports = SpecsDao


