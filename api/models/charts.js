/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('charts', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    cgoods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    specs_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'goods_specs',
        key: 'id'
      }
    },
    cart_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    is_check: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'charts'
  });
};
