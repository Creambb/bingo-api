/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('brands', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    brandId: {
      type: DataTypes.INTEGER(8).UNSIGNED.ZEROFILL,
      allowNull: false,
      field: 'brand_id'
    },
    brand_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'brandName'
    },
    brandImg: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'brand_img'
    },
    brandDesc: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'brand_desc'
    },
    brandSort: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'brand_sort'
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
      tableName: 'brands'
    });
};
