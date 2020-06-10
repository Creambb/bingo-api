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
            console.log('options');
            console.log(options);
            var insertToCharts = await ChartsDao.insertToCharts(options);
            return insertToCharts;
        }
    },

    async ListChartGoods(params) {
        // console.log(params);
        var options = {
            userId: params.userId,
        };
        var charts = await ChartsDao.findChartsGoods(options);
        // console.log('charts');
        // console.log(charts);
        return charts
    },

    async updateCharts(params) {
        // console.log('params');
        // console.log(params);
        var updateList = params.chartsList;
        var querySel = {
            userId: params.userId,
        };
        var charts = await ChartsDao.findChartsGoods(querySel);
        var flag;
        charts.forEach(async chartItem => {
            console.log(chartItem);
            flag = false;
            updateList.forEach(async updateItem => {
                if (chartItem.id === updateItem.id) {
                    flag = true;
                    var objUpdate = { cartNum: updateItem.cartNum }
                    var queryUpdate = { id: updateItem.id };
                    var update = await ChartsDao.updateCharts(objUpdate, queryUpdate);
                }
            });
            if (!flag) {
                var queryClear = { id: chartItem.id };
                var update = await ChartsDao.destroyCharts(queryClear);
            }
        });

        // updateList.forEach(async updateItem => {
        //     console.log(updateItem);
        //     flag = false;
        //     charts.forEach(chartItem => {
        //         console.log(chartItem);
        //         if (chartItem.id === updateItem.id) {
        //             flag = true;
        //         }
        //     });
        //     if (flag) {
        //         var objUpdate = { cartNum: updateItem.cartNum }
        //         var queryUpdate = { id: updateItem.id };
        //         var update = await ChartsDao.updateCharts(objUpdate, queryUpdate);
        //     } else {
        //         var queryClear = { id: updateItem.id };
        //         var update = await ChartsDao.clearCharts(queryClear);
        //     }
        // });

        // console.log('charts');
        // console.log(charts);
        return charts
    },

    async clearCharts(params) {
        console.log('params');
        console.log(params);
        var where = {
            userId: params.userId,
        };
        var charts = await ChartsDao.destroyCharts(where);
        console.log('charts');
        console.log(charts);
        return charts
    },

}

module.exports = chartsService