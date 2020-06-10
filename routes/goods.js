var express = require('express');
var router = express.Router();
const GoodsCtrl = require('../api/controller/goodsCtrl');


/* GET users listing. */
router.get('/', async function (req, res, next) {
    var data = await GoodsCtrl.findGoods();
    res.send(JSON.stringify(data));
});

router.post('/', async function (req, res, next) {
    console.log(res.body);
    var reqBody = req.body;
    var resData;
    switch (reqBody.cmd) {
        case 'ListTopGoods':
            resData = await GoodsCtrl.listTopGoods(req, res);
            break;
        // case 'ListCategoryGoods':
        //     resData = await GoodsCtrl.ListCategoryGoods(req, res);
        //     break;
        case 'ListGoods':
            resData = await GoodsCtrl.listGoods(req, res);
            break;
        case 'ListCategory':
            getListCategory(req, res);
            break;
        case 'ListTypesStock':
            console.log('ListTypesStock')
            resData = await GoodsCtrl.listTypesStock(req, res);
            break;
    }
    //  data = await GoodsCtrl.findGoods();
    res.send(JSON.stringify(resData));
});

module.exports = router;
