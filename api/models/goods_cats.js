/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods_cats', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cat_id: {
      type: DataTypes.INTEGER(8).UNSIGNED.ZEROFILL,
      allowNull: false
    },
    cat_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    cat_sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_show: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    cat_img: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cat_flag: {
      type: DataTypes.INTEGER(4),
      allowNull: false
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
    tableName: 'goods_cats'
  });
};
