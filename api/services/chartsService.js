const ChartsDao = require('../dao/chartsDao');

const chartsService = {

    async addToCharts(params) {
        console.log(params);
        var options = {
            userId: params.userId,
            goodsId: params.goodsId,
            specsId: params.specsId,
            // cartNum: params.cartNum,
            // isCheck: params.isCheck,
        };
        var charts = await ChartsDao.findCharts(options);
        if (charts && charts.length === 1) {
            var chart = charts[0];
            // options.cartNum = params.cartNum;
            var obj = {
                cartNum: params.cartNum + chart.cartNum
            }
            var where = {
                id: chart.id
            }
            var insertToCharts = await ChartsDao.updateCharts(obj, where);
        } else {
            options.cartNum = params.cartNum;
            var insertToCharts = await ChartsDao.insertToCharts(options);
            return insertToCharts;
        }

        // var options = {
        //     userId: 1,
        //     goodsId: 1,
        //     specsId: 1,
        //     cartNum: 2,
        //     isCheck: 1,
        // };
    },

    async ListChartGoods(params) {
        // console.log(params);
        var options = {
            userId: params.userId,
        };
        var charts = await ChartsDao.findChartsGoods(options);
        console.log('charts');
        console.log(charts);
    },


}

module.exports = chartsService