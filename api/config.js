// sequelize配置文件
module.exports = {
    // 哪个数据库
    database: 'bingo',
    // 用户名
    username: 'root',
    // 密码
    password: '123456',
    // 地址
    host: 'localhost',
    // 使用什么数据库
    dialect: 'mysql',
    // 连接池
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // 数据表全局配置
    define: {
        freezeTableName: true,
        timestamps: false,
        paranoid: false,
        operatorsAliases: false
    },
    // 时区
    timezone: '+08:00'
}
