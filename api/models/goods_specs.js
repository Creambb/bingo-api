/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods_specs', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    specs_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'goods',
        key: 'id'
      }
    },
    goods_specs: {
      type: DataTypes.JSON,
      allowNull: true
    },
    goods_stock: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    goods_price: {
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
    tableName: 'goods_specs'
  });
};
