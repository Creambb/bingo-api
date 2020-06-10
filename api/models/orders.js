module.exports = function (sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.INTEGER(8).UNSIGNED.ZEROFILL,
      allowNull: false
    },
    order_no: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    order_status: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    goods_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deliver_type: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    total_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    real_total_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    order_mark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pay_type: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pay_from: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_pay: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    order_score: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    order_remarks: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    need_pay: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    is_refund: {
      type: DataTypes.INTEGER(4),
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
      tableName: 'orders'
    });
};
