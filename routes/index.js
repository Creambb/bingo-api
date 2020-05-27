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

router.post('/api/goods', function (req, res) {
  var result = req.body;
  switch (result.cmd) {
    case 'ListTopGoods':
      getTopGoods(req, res);
      break;
    case 'ListGoods':
      getListGoods(req, res);
      break;
    case 'ListCategory':
      getListCategory(req, res);
      break;
  }

})

function getTopGoods(req, res) {
  var sql = "select brandId,goodsCatId as categoryId,goodsId,goodsUrl,goodsName,goodsStock,isSale,isOffSale,isHot,isNew,isRecom,shopPrice,saleNum from goods where (isHot = true or isNew = true or isRecom = true) and isSale = true and isOffSale = false";
  var sqlArr = [];
  var callBack = (err, data) => {
    var resData = resolveTopGoods(JSON.parse(JSON.stringify(data)));
    if (err) {
      console.log('连接出错');
    } else {
      res.send(JSON.stringify(resData))
    }
  }
  dbconfig.sqlConnect(sql, sqlArr, callBack);
}

function getListGoods(req, res) {
  var sql = "select brandId,goodsCatId as categoryId,goodsId,goodsUrl,goodsName,goodsStock,isSale,isOffSale,shopPrice,saleNum from goods";
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
    var resData = {
      code: 0,
      code_msg: '',
      body: {
        list: data
      }
    }
    if (err) {
      console.log('连接出错');
    } else {
      res.send(JSON.stringify(resData))
    }
  }
  dbconfig.sqlConnect(sql, sqlArr, callBack);
}




function resolveTopGoods(data) {
  var hotList = [];
  var newList = [];
  var recomList = [];
  data.forEach(item => {
    if (item.isHot) {
      hotList.push(item);
    }
    if (item.isNew) {
      newList.push(item);
    }
    if (item.isRecom) {
      recomList.push(item);
    }
  });
  return {
    code: 0,
    code_msg: '',
    body: {
      hotList,
      newList,
      recomList
    }
  }
}

module.exports = router;
