var express = require('express');
var router = express.Router();
const ChartsCtrl = require('../api/controller/chartsCtrl');


const ChartsModel = require('../api/model/charts');


router.post('/', async function (req, res, next) {
    console.log(res.body);
    var reqBody = req.body;
    var resData;
    switch (reqBody.cmd) {
        case 'AddToCharts':
            resData = await ChartsCtrl.addToCharts(reqBody, res);
            break;
        case 'ListChartGoods':
            resData = await ChartsCtrl.ListChartGoods(reqBody, res);
            console.log('resData');
            console.log(resData);
            break;
        case 'UpdateCharts':
            resData = await ChartsCtrl.updateCharts(reqBody, res);
            console.log('resData');
            console.log(resData);
            break;
        case 'ClearCharts':
            resData = await ChartsCtrl.clearCharts(reqBody, res);
            console.log('resData');
            console.log(resData);
            break;

    }
    //  data = await ChartsCtrl.findGoods();
    res.send(JSON.stringify(resData));
});

module.exports = router;
