/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    goods_id: {
      type: DataTypes.INTEGER(8).UNSIGNED.ZEROFILL,
      allowNull: false,
      unique: true
    },
    goods_sn: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    goods_no: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    goods_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    goods_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    market_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shop_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    discount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dc_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    goods_stock: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    warn_stock: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    goods_unit: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    goods_tips: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_sale: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    is_offSale: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    is_new: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    is_hot: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    is_recom: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    sale_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'goods_cats',
        key: 'id'
      }
    },
    brand_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'brands',
        key: 'id'
      }
    },
    attribute_list: {
      type: DataTypes.JSON,
      allowNull: true
    },
    goods_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    goods_status: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    sale_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    visit_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    appraise_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gallery: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    goods_keywords: {
      type: DataTypes.STRING(600),
      allowNull: true
    },
    cost_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'goods'
  });
};
