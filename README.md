# Node.js 后台项目
使用 typescript、routing-controllers、 sequelize

## dependence
- [routing-controllers](https://github.com/typestack/routing-controllers)
- [sequelize](https://github.com/sequelize/sequelize)
- [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript)

## usage
```bash
> npm i
# 请先创建项目所用的数据库：`hotdog`
> npm run watch-ts
> npm run watch-node
```

## run test

```bash
npm test
```

## 生成 sequelize 所有模型

```bash
npm install -g sequelize-auto
npm install -g mysql2
// 在对应的文件夹下执行以下命令
sequelize-auto -h 数据库的IP地址 -d 数据库名 -u 用户名 -x 密码 -p 端口 -t 表名
```

## todo
1. [ ] 接入 koa session
2. [ ] 接入 koa cors
3. [ ] 项目启动时自动创建数据库和表
4. [ ] 接入微信扫码登录
5. [ ] 接入 jwt
