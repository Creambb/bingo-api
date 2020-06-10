
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('order_goods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'goods',
        key: 'id'
      }
    },
    goods_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    goods_img: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    goods_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    goods_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    goods_spec_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'goods_specs',
        key: 'id'
      }
    },
    goods_specs: {
      type: DataTypes.JSON,
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
      tableName: 'order_goods'
    });
};