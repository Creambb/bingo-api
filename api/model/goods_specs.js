
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('goods_specs', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    specsId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'specs_id'
    },
    goodsId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'goods_id',
      references: {
        model: 'goods',
        key: 'id'
      }
    },
    goodsSpecs: {
      type: DataTypes.JSON,
      allowNull: true,
      field: 'goods_specs'
    },
    goodsStock: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'goods_stock'
    },
    goodsPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'goods_price'
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
      tableName: 'goods_specs'
    });;

}