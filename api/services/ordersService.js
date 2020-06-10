const OrdersDao = require('../dao/ordersDao');
const ChartsDao = require('../dao/chartsDao');
const OrderGoodsDao = require('../dao/orderGoodsDao');



const chartsService = {

    async submitOrder(params) {
        // 随机生成订单号（需优化）
        var orderNo = Math.floor(Math.random() * 100000000);
        console.log('params');
        console.log(params);
        orderOptions = {
            orderNo: orderNo,
            userId: params.userId,
            realTotalAmount: params.realTotalAmount,
            orderMark: params.orderMark,
            orderStatus: 0
        }
        await OrdersDao.insertToOrders(orderOptions).then(function (projects) {
            console.log('projects');
            console.log(JSON.parse(JSON.stringify(projects)));
            params.goodsList.forEach(async item => {
                var orderGoodsOptions = {
                    orderId: projects.id,
                    goodsId: item.goodsId,
                    goodsName: item.goodsName,
                    goodsImg: item.goodsImg,
                    goodsPrice: item.goodsPrice,
                    goodsNum: item.goodsNum,
                    goodsSpecId: item.goodsSpecId,
                    goodsSpecs: item.goodsSpecs,
                }
                var orders = await OrderGoodsDao.insertToOrders(orderGoodsOptions).then(async function (projects) {
                    console.log('projects');
                    console.log(JSON.parse(JSON.stringify(projects)));
                    var where = {
                        id: item.cartsId
                    }
                    var orders = await ChartsDao.destroyCharts(where);
                    return orders;
                });
                return orders;
            });
            return true;
        })

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

module.exports = chartsService