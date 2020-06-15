// 业务逻辑层，处理数据逻辑
const User = require('../model/usersModel');


const UsersDao = require('../dao/usersDao');

const usersService = {

    async register(params) {
        console.log('params');
        console.log(params);
        // options = {
        //     orderNo: orderNo,
        //     userId: params.userId,
        //     realTotalAmount: params.realTotalAmount,
        //     orderMark: params.orderMark,
        //     orderStatus: 0
        // }
        var user = await UsersDao.insertUsers(options);
        // var orders = await OrdersDao.insertToOrders(options);
        // var charts = await ChartsDao.destroyCharts(options);
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

}



module.exports = usersService


