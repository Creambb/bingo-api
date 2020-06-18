var express = require('express');
var router = express.Router();
const OrdersCtrl = require('../api/controller/ordersCtrl');


router.post('/', async function (req, res, next) {
    var reqBody = req.body;
    var resData;
    switch (reqBody.cmd) {
        case 'SubmitOrder':
            resData = await OrdersCtrl.submitOrder(reqBody, res);
            break;
        case 'PayOrder':
            resData = await OrdersCtrl.addToCharts(reqBody, res);
            break;
    }
    //  data = await ChartsCtrl.findGoods();
    res.json(resData);
});

module.exports = router;
