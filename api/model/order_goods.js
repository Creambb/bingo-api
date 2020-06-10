/* jshint indent: 2 */

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('order_goods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'order_id',
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    goodsId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'goods_id',
      references: {
        model: 'goods',
        key: 'id'
      }
    },
    goodsName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'goods_name'
    },
    goodsImg: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'goods_img'
    },
    goodsNum: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'goods_num'
    },
    goodsPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'goods_price'
    },
    goodsSpecId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'goods_spec_id',
      references: {
        model: 'goods_specs',
        key: 'id'
      }
    },
    goodsSpecs: {
      type: DataTypes.JSON,
      allowNull: true,
      field: 'goods_specs'
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
      tableName: 'order_goods'
    });
};

