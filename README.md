# Node.js 后台项目
使用 typescript、routing-controllers、 sequelize

## dependence
- [routing-controllers](https://github.com/typestack/routing-controllers)
- [sequelize](https://github.com/sequelize/sequelize)
- [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript)

## usage
```bash
> npm i
# 请先创建项目所用的数据库：`hotdog`，项目启动之后会自动同步所需要的表
> npm run watch-ts
> npm run watch-node
```

## run test

```bash
npm test
```

## 目标功能
- [x] 接入 koa cors
- [x] 项目启动时自动创建数据库和表
- [ ] IP 定位
- [ ] 地址管理
- [ ] 接入 koa session
- [ ] 注册登录
- [ ] 接入微信扫码登录
- [ ] 接入 jwt
- [x] 部署上线
