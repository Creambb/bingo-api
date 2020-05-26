var express = require('express');
var router = express.Router();
var dbconfig = require('../util/dbconfig')

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  var sql = "select * from cate";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错');
    } else {
      res.send({
        'list': data
      })
    }
  }

  dbconfig.sqlConnect(sql, sqlArr, callBack);

});

/* GET Users page. */
router.get('/getUsers', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  var sql = "select * from cate";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错');
    } else {
      res.send({
        'list': data
      })
    }
  }

  dbconfig.sqlConnect(sql, sqlArr, callBack);

});

/* GET Goods page. */
router.get('/getGoods', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log('getGoods访问');
  var sql = "select * from cate where category = 'p'";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错');
    } else {
      res.send(JSON.stringify({
        'list': data
      }))
    }
  }

  dbconfig.sqlConnect(sql, sqlArr, callBack);

});

router.post('/api', function (req, res) {
  var result = req.body;
  switch (result.cmd) {
    case 'ListGoods':
      getListGoods(req, res);
      break;
    case 'ListCategory':
      getListCategory(req, res);
      break;
  }

})

function getListGoods(req, res) {
  var sql = "select brandId,goodsCatId,goodsId,goodsImg,goodsName,goodsStock,isSale,isHot,isNew,isRecom,shopPrice from goods";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错');
    } else {
      res.send(JSON.stringify({
        'list': data
      }))
    }
  }
  dbconfig.sqlConnect(sql, sqlArr, callBack);
}

function getListCategory(req, res) {
  var sql = "select catId as id,catName as text1,catSort,isShow from goods_cats";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错');
    } else {
      res.send(JSON.stringify({
        'list': data
      }))
    }
  }
  dbconfig.sqlConnect(sql, sqlArr, callBack);
}

module.exports = router;
