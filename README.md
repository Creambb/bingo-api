# bingo-api
一个基于小程序的文具商城--后台api

### 依赖安装

```
    // 初始化项目
    npm init -y
    // 安装express
    npm install express --save
    // 安装mysql
    npm install --save mysql
    // 安装sequelize
    npm install sequelize --save
    // sequelize需要单独安装mysql2依赖，否则报错'Please install mysql2 package manually'
    npm install mysql2 --save
```

### sequelize-auto同步生成数据库表模型models

```
    npm install -g sequelize-auto
    npm install -g mysql
    sequelize-auto -h 数据库的IP地址 -d 数据库名 -u 用户名 -x 密码 -p 端口 -t 表名
```

