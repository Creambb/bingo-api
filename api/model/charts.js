/* jshint indent: 2 */
const Sequelize = require('sequelize');
const sequelize = require('../../config/config').sequelize;
const GoodsModel = require('./goods');
const SpecsModel = require('./goods_specs');


const ChartsModel = sequelize.define('charts', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  userId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id'
    }
  },
  goodsId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    field: 'cgoods_id'
  },
  specsId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    field: 'specs_id',
    references: {
      model: 'goods_specs',
      key: 'id'
    }
  },
  cartNum: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    field: 'cart_num'
  },
  isCheck: {
    type: Sequelize.INTEGER(4),
    allowNull: true,
    field: 'is_check'
  }
}, {
    timestamps: false,
    freezeTableName: true, // Model tableName will be the same as the model name        
    tableName: 'charts'
  });


// ChartsModel.hasOne(GoodsModel, {
//   foreignKey: 'goodsId',
//   targetKey: 'id'
// });

// ChartsModel.hasOne(SpecsModel, {
//   foreignKey: 'id',
//   targetKey: 'specsId'
// });

module.exports = ChartsModel
