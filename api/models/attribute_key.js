/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attribute_key', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    key_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    key_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    key_sort: {
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
    tableName: 'attribute_key'
  });
};
