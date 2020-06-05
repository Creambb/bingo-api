const GoodsDao = require('../dao/goodsDao');
const CatsDao = require('../dao/catsDao');
const SpecsDao = require('../dao/SpecsDao');

const goodsService = {
    async findGoods() {
        var goodsAttrs = ['goodsId', 'goodsName', 'goodsImg', 'catId', 'brandId', 'isSale', 'isOffSale', 'shopPrice', 'saleNum', 'attributeList']
        var catsAttrs = ['id', 'catName', 'catSort', 'isShow'];
        var catsList = await CatsDao.findCats(catsAttrs);
        var goodsList = await GoodsDao.findGoods(goodsAttrs);
        if (catsList && goodsList) {
            catsList.map((catItem) => {
                catItem.goodsList = [];
                goodsList.forEach((goodsItem) => {
                    if (catItem.id == goodsItem.catId) {
                        catItem.goodsList.push(goodsItem);
                    }
                })
            })
        }
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
        console.log('goodsList');
        console.log(goodsList);
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