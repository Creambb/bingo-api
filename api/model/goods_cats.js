/* jshint indent: 2 */
const Sequelize = require('sequelize');
const sequelize = require('../../config/config').sequelize;

module.exports = sequelize.define('goods_cats', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  catId: {
    type: Sequelize.INTEGER(8).UNSIGNED.ZEROFILL,
    allowNull: false,
    field: 'cat_id'
  },
  catName: {
    type: Sequelize.STRING(20),
    allowNull: false,
    field: 'cat_name'
  },
  catSort: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'cat_sort'
  },
  isShow: {
    type: Sequelize.INTEGER(4),
    allowNull: false,
    field: 'is_show'
  },
  catImg: {
    type: Sequelize.STRING(150),
    allowNull: true,
    field: 'cat_img'
  },
  catFlag: {
    type: Sequelize.INTEGER(4),
    allowNull: false,
    field: 'cat_flag'
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
    timestamps: false,
    freezeTableName: true, // Model tableName will be the same as the model name      
    tableName: 'goods_cats'
  });
;
