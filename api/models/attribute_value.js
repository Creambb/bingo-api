/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attribute_value', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    value_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    value_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    value_sort: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'attribute_value'
  });
};
