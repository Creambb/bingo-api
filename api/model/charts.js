module.exports = function (sequelize, DataTypes) {
  return sequelize.define('charts', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    goodsId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'cgoods_id'
    },
    specsId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'specs_id',
      references: {
        model: 'goods_specs',
        key: 'id'
      }
    },
    cartNum: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'cart_num'
    },
    isCheck: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'is_check'
    }
  }, {
      timestamps: false,
      freezeTableName: true, // Model tableName will be the same as the model name        
      tableName: 'charts'
    });


  // ChartsModel.hasOne(GoodsModel, {
  //   foreignKey: 'goodsId',
  //   targetKey: 'id'
  // });

  // ChartsModel.hasOne(SpecsModel, {
  //   foreignKey: 'id',
  //   targetKey: 'specsId'
  // });

}  
