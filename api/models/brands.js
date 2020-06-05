/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brands', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brand_id: {
      type: DataTypes.INTEGER(8).UNSIGNED.ZEROFILL,
      allowNull: false
    },
    brand_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    brand_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    brand_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    brand_sort: {
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
    tableName: 'brands'
  });
};
