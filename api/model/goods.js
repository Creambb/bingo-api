/* jshint indent: 2 */
const Sequelize = require('sequelize');
const sequelize = require('../../config/config').sequelize;
const ChartsModel = require('./charts');

const GoodsModel = sequelize.define('goods', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  goodsId: {
    type: Sequelize.INTEGER(8).UNSIGNED.ZEROFILL,
    allowNull: false,
    unique: true,
    field: 'goods_id'
  },
  goodsSn: {
    type: Sequelize.STRING(30),
    allowNull: false,
    field: 'goods_sn'
  },
  goodsNo: {
    type: Sequelize.STRING(30),
    allowNull: false,
    field: 'goods_no'
  },
  goodsName: {
    type: Sequelize.STRING(50),
    allowNull: false,
    field: 'goods_name'
  },
  goodsImg: {
    type: Sequelize.STRING(255),
    allowNull: true,
    field: 'goods_img'
  },
  marketPrice: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    field: 'market_price'
  },
  shopPrice: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    field: 'shop_price'
  },
  discount: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    field: 'discount'
  },
  dcPrice: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    field: 'dc_price'
  },
  goodsStock: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'goods_stock'
  },
  warnStock: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'warn_stock'
  },
  goodsUnit: {
    type: Sequelize.CHAR(10),
    allowNull: true,
    field: 'goods_unit'
  },
  goodsTips: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'goods_tips'
  },
  isSale: {
    type: Sequelize.INTEGER(4),
    allowNull: true,
    field: 'is_sale'
  },
  isOffSale: {
    type: Sequelize.INTEGER(4),
    allowNull: true,
    field: 'is_offSale'
  },
  isNew: {
    type: Sequelize.INTEGER(4),
    allowNull: true,
    field: 'is_new'
  },
  isHot: {
    type: Sequelize.INTEGER(4),
    allowNull: true,
    field: 'is_hot'
  },
  isRecom: {
    type: Sequelize.INTEGER(4),
    allowNull: true,
    field: 'is_recom'
  },
  saleNum: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'sale_num'
  },
  catId: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'cat_id',
    references: {
      model: 'goods_cats',
      key: 'id'
    }
  },
  brandId: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'brand_id',
    references: {
      model: 'brands',
      key: 'id'
    }
  },
  attributeList: {
    type: Sequelize.JSON,
    allowNull: true,
    field: 'attribute_list'
  },
  goodsDesc: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'goods_desc'
  },
  goodsStatus: {
    type: Sequelize.INTEGER(4),
    allowNull: true,
    field: 'goods_status'
  },
  saleTime: {
    type: Sequelize.DATE,
    allowNull: true,
    field: 'sale_time'
  },
  visitNum: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'visit_num'
  },
  appraiseNum: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    field: 'appraise_num'
  },
  gallery: {
    type: Sequelize.TEXT,
    allowNull: true,
    field: 'gallery'
  },
  goodsKeywords: {
    type: Sequelize.STRING(600),
    allowNull: true,
    field: 'goods_keywords'
  },
  costPrice: {
    type: Sequelize.DECIMAL,
    allowNull: true,
    field: 'cost_price'
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
    tableName: 'goods'
  });

// GoodsModel.belongsTo(ChartsModel, {
//   foreignKey: 'id',
// });


module.exports = GoodsModel;