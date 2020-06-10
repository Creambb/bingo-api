/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    orderId: {
      type: DataTypes.INTEGER(8).UNSIGNED.ZEROFILL,
      allowNull: true,
      field: 'order_id'
    },
    orderNo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'order_no'
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
    orderStatus: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      field: 'order_status'
    },
    goodsAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'goods_amount'
    },
    deliverType: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'deliver_type'
    },
    totalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'total_amount'
    },
    realTotalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'real_total_amount'
    },
    orderMark: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'order_mark'
    },
    payType: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'pay_type'
    },
    payFrom: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'pay_from'
    },
    isPay: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'is_pay'
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_name'
    },
    userPhone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'user_phone'
    },
    orderScore: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'order_score'
    },
    orderRemarks: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'order_remarks'
    },
    needPay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'need_pay'
    },
    isRefund: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      field: 'is_refund'
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
      tableName: 'orders'
    });
};
