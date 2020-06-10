// 视图控制层，写接口响应
const ChartsService = require('../services/chartsService');

function getResData() {
    return {
        code: 0,
        request_id: 12345,
        code_msg: "",
        body: {}
    }
}

const ChartsCtrl = {

    async addToCharts(reqBody) {
        var params = reqBody.body;
        var list = await ChartsService.addToCharts(params);
        var response = getResData();
        response.body = list;
        return response;
    },

    async ListChartGoods(reqBody) {
        var params = reqBody.body;
        var list = await ChartsService.ListChartGoods(params);
        var response = getResData();
        response.body = list;
        return response;
    },

    async updateCharts(reqBody) {
        var params = reqBody.body;
        var list = await ChartsService.updateCharts(params);
        var response = getResData();
        response.body = list;
        return response;
    },

    async clearCharts(reqBody) {
        var params = reqBody.body;
        var list = await ChartsService.clearCharts(params);
        var response = getResData();
        response.body = list;
        return response;
    },

}

module.exports = ChartsCtrl