/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.INTEGER(8).UNSIGNED.ZEROFILL,
      allowNull: false,
      field: 'user_id'
    },
    openId: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      field: 'open_id'
    },
    userName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'user_name'
    },
    trueName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'true_name'
    },
    brithday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'brithday'
    },
    photoUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'photo_url'
    },
    userSex: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'user_sex'
    },
    mobile: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'mobile'
    },
    telnum: {
      type: DataTypes.STRING(12),
      allowNull: true,
      field: 'telnum'
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
      tableName: 'users'
    });
};
