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
      getCategoryData(req, res);
      break;
    case 'ListCategory':
      getListCategory(req, res);
      break;
  }
})

function getListGoods(req, res, catData, goodsData) {
  var catData = JSON.parse(JSON.stringify(catData));
  var goodsData = JSON.parse(JSON.stringify(goodsData));
  console.log('goods');
  // console.log(catData);
  // console.log(goodsData);
  if (catData && goodsData) {
    var data = [];
    // var list = catData.map((item) => {
    //   var data = JSON.parse(JSON.stringify(item));
    //   data.goodsList = [];
    //   goodsData.forEach((goodsItem) => {
    //     console.log(item.id == goodsItem.categoryId)
    //     if (item.id == goodsItem.categoryId) {
    //       console.log('item');
    //       console.log(goodsItem);
    //       data.goodsList.push(goodsItem);
    //     }
    //   })
    //   return data;
    // })

    goodsData.forEach((goodsItem) => {
      goodsItem.attributeList = JSON.parse(goodsItem.attributeList);
    })

    catData.map((item) => {
      item.goodsList = [];
      goodsData.forEach((goodsItem) => {
        // goodsItem.attributeList = JSON.parse(goodsItem.attributeList);
        if (item.id == goodsItem.categoryId) {
          // console.log('item');
          // console.log(goodsItem);
          item.goodsList.push(goodsItem);
        }
      })
    })

    console.log(catData);
    var response = {
      code: 0,
      request_id: 12345,
      code_msg: "",
      body: catData
    }
    res.send(JSON.stringify(response))
  }
}


function getTopGoods(req, res) {
  var sql = "select brandId,goodsCatId as categoryId,goodsId,goodsUrl,goodsName,goodsStock,isSale,isOffSale,isHot,isNew,isRecom,shopPrice,saleNum,attributeList from goods where (isHot = true or isNew = true or isRecom = true) and isSale = true and isOffSale = false";
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

function getGoodsData(req, res, catData) {
  var sql = "select brandId,goodsCatId as categoryId,goodsId,goodsUrl,goodsName,goodsStock,isSale,isOffSale,shopPrice,saleNum,attributeList from goods";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错');
      return null;
    } else {
      getListGoods(req, res, catData, data);
    }
  }
  dbconfig.sqlConnect(sql, sqlArr, callBack);
}

function getCategoryData(req, res) {
  var sql = "select catId as id,catName as navTitle,catSort,isShow from goods_cats";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错');
      return null;
    } else {
      getGoodsData(req, res, data);
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
