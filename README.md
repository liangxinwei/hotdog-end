# Node.js 后台项目
使用 typescript、routing-controllers、 sequelize

## dependence
- [routing-controllers](https://github.com/typestack/routing-controllers)
- [sequelize](https://github.com/sequelize/sequelize)
- [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript)
- [react](https://github.com/facebook/react)
- [material-ui](https://github.com/mui-org/material-ui)
- [webpack](https://github.com/webpack/webpack)
- [eslint](https://github.com/webpack/webpack)

## usage
```bash
> npm i
> brew services start mysql
> mysql -u root -p
# 请自行修改config/backend/local.js 中的user、password 以及以下的database
mysql> create database ts_test;
mysql> use hotdog;
mysql> CREATE TABLE `user_info_test` (   `uid` int(11) unsigned NOT NULL AUTO_INCREMENT,   `name` varchar(11) NOT NULL,   `age` int(3) DEFAULT '0',   `gender` int(1) NOT NULL,   PRIMARY KEY (`uid`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

> npm run watch-ts
> npm run watch-node

> curl http://127.0.0.1:8888/add/Niko/18/1
> curl http://127.0.0.1:8888/add/Bellic/26/2

> curl http://127.0.0.1:8888/list/          # [{name: Niko, ...}, {name: Bellic, ...}]
> curl http://127.0.0.1:8888/list/filter/1  # [{name: Niko, ...}]
```

## run test

本示例存在一些简单的测试用例，可以在服务启动的情况下使用：
```bash
npm test
```
