// 视图控制层，写接口响应
const GoodsService = require('../services/goodsService');

function getResData() {
    return {
        code: 0,
        request_id: 12345,
        code_msg: "",
        body: {}
    }
}

const goodsCtrl = {

    async listGoods() {
        var list = await GoodsService.findGoods();
        var response = getResData();
        response.body = list;
        return response;
    },

    async listTopGoods() {
        var obj = await GoodsService.findTopGoods();
        var response = getResData();
        response.body = obj;
        return response;
    },

    async listTypesStock(req) {
        var params = req.body;
        console.log('params');
        console.log(params);
        var list = await GoodsService.findTypesStock(params);
        var response = getResData();
        response.body = list;
        return response;
    },

}

module.exports = goodsCtrl