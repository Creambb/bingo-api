/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8).UNSIGNED.ZEROFILL,
      allowNull: false
    },
    open_id: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    true_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    brithday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    photo_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_sex: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    telnum: {
      type: DataTypes.STRING(12),
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
    tableName: 'users'
  });
};
