const mysql = require('mysql');

module.exports = {
    // 数据库暴露
    config: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'exapp',
    },

    sqlConnect: function (sql, sqlArr, callBack) {
        var pool = mysql.createPool(this.config);
        pool.getConnection((err, conn) => {
            console.log('12345');
            if (err) {
                console.log(err);
                console.log('连接失败!');
                return;
            }

            // 事情驱动回调
            conn.query(sql, sqlArr, callBack);
            conn.release();
        })

    }
}