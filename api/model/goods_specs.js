/* jshint indent: 2 */
const Sequelize = require('sequelize');
const sequelize = require('../../config/config').sequelize;

module.exports = sequelize.define('goods_specs', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  specsId: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'specs_id'
  },
  goodsId: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'goods_id',
    references: {
      model: 'goods',
      key: 'id'
    }
  },
  goodsSpecs: {
    type: Sequelize.JSON,
    allowNull: true,
    field: 'goods_specs'
  },
  goodsStock: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'goods_stock'
  },
  goodsPrice: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    field: 'goods_price'
  },
  createTime: {
    type: Sequelize.DATE,
    allowNull: true,
    field: 'create_time'
  },
  updateTime: {
    type: Sequelize.DATE,
    allowNull: true,
    field: 'update_time'
  }
}, {
    tableName: 'goods_specs'
  });;

