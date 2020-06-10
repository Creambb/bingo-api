
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('goods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    goodsId: {
      type: DataTypes.INTEGER(8).UNSIGNED.ZEROFILL,
      allowNull: false,
      unique: true,
      field: 'goods_id'
    },
    goodsSn: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'goods_sn'
    },
    goodsNo: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'goods_no'
    },
    goodsName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'goods_name'
    },
    goodsImg: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'goods_img'
    },
    marketPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'market_price'
    },
    shopPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'shop_price'
    },
    discount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'discount'
    },
    dcPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'dc_price'
    },
    goodsStock: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'goods_stock'
    },
    warnStock: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'warn_stock'
    },
    goodsUnit: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      field: 'goods_unit'
    },
    goodsTips: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'goods_tips'
    },
    isSale: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'is_sale'
    },
    isOffSale: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'is_offSale'
    },
    isNew: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'is_new'
    },
    isHot: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'is_hot'
    },
    isRecom: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'is_recom'
    },
    saleNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'sale_num'
    },
    catId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'cat_id',
      references: {
        model: 'goods_cats',
        key: 'id'
      }
    },
    brandId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'brand_id',
      references: {
        model: 'brands',
        key: 'id'
      }
    },
    attributeList: {
      type: DataTypes.JSON,
      allowNull: true,
      field: 'attribute_list'
    },
    goodsDesc: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'goods_desc'
    },
    goodsStatus: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'goods_status'
    },
    saleTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'sale_time'
    },
    visitNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'visit_num'
    },
    appraiseNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'appraise_num'
    },
    gallery: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'gallery'
    },
    goodsKeywords: {
      type: DataTypes.STRING(600),
      allowNull: true,
      field: 'goods_keywords'
    },
    costPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'cost_price'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'create_time'
    },
    updateTime: {
      type: DataTypes.DATE,
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
}

