const GoodsDao = require('../dao/goodsDao');
const CatsDao = require('../dao/catsDao');
const SpecsDao = require('../dao/SpecsDao');

const goodsService = {
    async findGoods() {
        var list = [];
        var catsAttrs = ['id', 'catName', 'catSort', 'isShow'];
        var catsList = await CatsDao.findCatsGoods(catsAttrs);
        catsList.forEach((item) => {
            if (item.goodsList.length !== 0) {
                list.push(item);
            }
        })
        // console.log('list');
        // console.log(list);
        return catsList;
    },

    async findTopGoods() {
        var attributes = ['goodsId', 'goodsName', 'goodsImg', 'catId', 'brandId', 'isSale', 'isOffSale', 'isHot', 'isNew', 'isRecom', 'shopPrice', 'saleNum', 'attributeList']
        var goodsList = await GoodsDao.findGoods(attributes);
        var obj = {
            hotList: [],
            newList: [],
            recomList: [],
        }
        // console.log('goodsList');
        // console.log(goodsList);
        goodsList.forEach(item => {
            item.isHot && obj.hotList.push(item);
            item.isNew && obj.newList.push(item);
            item.isRecom && obj.recomList.push(item);
        });
        return obj;
    },

    async findTypesStock(params) {
        var attributes = ['id', 'goodsId', 'goodsSpecs', 'goodsStock', 'goodsPrice']
        var where = {
            goodsId: params.data.goodsId
        };
        var typeStockList = await SpecsDao.findSpecs(attributes, where);
        console.log('typeStockList');
        console.log(typeStockList);
        return typeStockList;
    },


}

module.exports = goodsService