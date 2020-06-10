
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('goods_cats', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    catId: {
      type: DataTypes.INTEGER(8).UNSIGNED.ZEROFILL,
      allowNull: false,
      field: 'cat_id'
    },
    catName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'cat_name'
    },
    catSort: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'cat_sort'
    },
    isShow: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      field: 'is_show'
    },
    catImg: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'cat_img'
    },
    catFlag: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      field: 'cat_flag'
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
      tableName: 'goods_cats'
    });
}


