# Node.js 后台项目
使用 typescript、routing-controllers、 sequelize

## dependence
- [routing-controllers](https://github.com/typestack/routing-controllers)
- [sequelize](https://github.com/sequelize/sequelize)
- [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript)

## usage
```bash
> npm i
> brew services start mysql
> mysql -u root -p
# 请自行修改config/local.js 中的user、password 以及以下的database
mysql> create database hotdog;
mysql> use hotdog;
mysql> CREATE TABLE `user` (`uid` int(11) unsigned NOT NULL AUTO_INCREMENT,   `name` varchar(11) NOT NULL,   `age` int(3) DEFAULT '0',   `gender` int(1) NOT NULL,   PRIMARY KEY (`uid`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

> npm run watch-ts
> npm run watch-node

> curl http://127.0.0.1:5000/add/Niko/18/1
> curl http://127.0.0.1:5000/add/Bellic/26/2

> curl http://127.0.0.1:5000/list/
> curl http://127.0.0.1:5000/list/filter/1
```

## run test

```bash
npm test
```

## todo
1. [ ] 接入 koa session
2. [ ] 接入 koa cors
3. [ ] 接入 koa static
4. [ ] 接入 koa views
5. [ ] 接入 log
6. [ ] 项目启动时自动创建数据库和表
7. [ ] pm2 部署到服务器
8. [ ] 接入微信扫码登录
9. [ ] 接入 jwt
