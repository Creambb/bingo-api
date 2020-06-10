// import Sequelize from 'sequelize'
// import config from '../config.js'
const Sequelize = require('sequelize');
const config = require('../config.js');


// 实例化sequelize
const sequelize = new Sequelize(config)

// 导入模型统一管理
const Goods = sequelize.import('./goods.js')
const Charts = sequelize.import('./charts.js')
const Cats = sequelize.import('./goods_cats.js')
const Specs = sequelize.import('./goods_specs.js')
const Orders = sequelize.import('./orders.js')
const OrderGoods = sequelize.import('./order_goods.js')



// 表间关联关系
// Charts关系
Charts.belongsTo(Goods, {
  as: 'goodsDetail',
  foreignKey: 'goodsId',
  targetKey: 'id'
})
Goods.hasMany(Charts, {
  as: 'goodsDetail',
  foreignKey: 'goodsId',
  targetKey: 'id'
})
Charts.belongsTo(Specs, {
  as: 'specsDetail',
  foreignKey: 'specsId',
  targetKey: 'id'
})
Specs.hasMany(Charts, {
  as: 'specsDetail',
  foreignKey: 'specsId',
  targetKey: 'id'
})

Goods.belongsTo(Cats, {
  as: 'goodsList',
  foreignKey: 'catId',
  targetKey: 'id'
})
Cats.hasMany(Goods, {
  as: 'goodsList',
  foreignKey: 'catId',
  targetKey: 'id'
})


// // theme关系
// Theme.belongsTo(Image, {
//   foreignKey: 'head_img_id',
//   targetKey: 'id'
// })
// Theme.belongsToMany(Product, {
//   through: Theme_product,
//   foreignKey: 'theme_id'
// })

// // product关系
// Product.belongsTo(Image, {
//   foreignKey: 'img_id',
//   targetKey: 'id'
// })
// Product.belongsTo(Category, {
//   foreignKey: 'category_id',
//   targetKey: 'id'
// })
// Product.belongsToMany(Theme, {
//   through: Theme_product,
//   foreignKey: 'product_id'
// })
// Product.hasMany(Product_image, {
//   foreignKey: 'product_id',
//   sourceKey: 'id'
// })

// // 目录关系
// Category.belongsTo(Image, {
//   foreignKey: 'topic_img_id',
//   targetKey: 'id'
// })
// Category.hasMany(Product, {
//   foreignKey: 'category_id',
//   sourceKey: 'id'
// })

// Product_image.belongsTo(Product, {
//   foreignKey: 'product_id',
//   targetKey: 'id'
// })
// Product_image.belongsTo(Image, {
//   foreignKey: 'img_id',
//   targetKey: 'id'
// })

module.exports = {
  Goods, Charts, Cats, Specs, Orders, OrderGoods
}