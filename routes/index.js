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
    catData.map((item) => {
      item.goodsList = [];
      goodsData.forEach((goodsItem) => {
        console.log(item.id == goodsItem.categoryId)
        if (item.id == goodsItem.categoryId) {
          console.log('item');
          console.log(goodsItem);
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

function getListGoods2(req, res) {
  // var resData = getGoodsData(req);
  // if (resData) {
  var data = {
    "code": 0,
    "request_id": 12345,
    "code_msg": "",
    "body": [{
      "id": 000122, // 类型id
      "navTitle": '文具专区', // 类型名称
      "isShow": true, // 是否显示
      "goodsList": [{
        "brandId": "0001222", // 品牌id
        "categoryId": "AZ48656", // 种类id
        "goodsId": "AZ48656", // 商品id
        "isSale": true, // 是否上架
        "isOffSale": false, // 是否下架
        "goodsImg": "../../images/goods/pencil01.jpg", // 商品图片
        "goodsName": "晨光中性笔", // 商品名称
        "goodsStock": 200, // 商品库存
        "shopPrice": 12.6, // 商品价格
      }, {
        "brandId": "0001222", // 品牌id
        "categoryId": "AZ48656", // 种类id
        "goodsId": "AZ48656", // 商品id
        "isSale": true, // 是否上架
        "isOffSale": false, // 是否下架
        "goodsImg": "../../images/goods/pencil02.jpg", // 商品图片
        "goodsName": "晨光中性笔", // 商品名称
        "goodsStock": 200, // 商品库存
        "shopPrice": 12.6, // 商品价格
      }]
    }, {
      "id": 000122, // 类型id
      "navTitle": '精品专区', // 类型名称
      "isShow": true, // 是否显示
      "goodsList": [{
        "brandId": "0001222", // 品牌id
        "categoryId": "AZ48656", // 种类id
        "goodsId": "AZ48656", // 商品id
        "isSale": true, // 是否上架
        "isOffSale": false, // 是否下架
        "goodsImg": "../../images/goods/pencil01.jpg", // 商品图片
        "goodsName": "晨光中性笔", // 商品名称
        "goodsStock": 200, // 商品库存
        "shopPrice": 12.6, // 商品价格
      }, {
        "brandId": "0001222", // 品牌id
        "categoryId": "AZ48656", // 种类id
        "goodsId": "AZ48656", // 商品id
        "isSale": true, // 是否上架
        "isOffSale": false, // 是否下架
        "goodsImg": "../../images/goods/pencil02.jpg", // 商品图片
        "goodsName": "晨光中性笔", // 商品名称
        "goodsStock": 200, // 商品库存
        "shopPrice": 12.6, // 商品价格
      }]
    }]
  }
  res.send(JSON.stringify(data))
  // }
}

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

function getGoodsData(req, res, catData) {
  var sql = "select brandId,goodsCatId as categoryId,goodsId,goodsUrl,goodsName,goodsStock,isSale,isOffSale,shopPrice,saleNum from goods";
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
