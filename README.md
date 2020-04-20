# hotdog 后台项目
基于 typescript、koa、mysql、[routing-controllers](https://github.com/typestack/routing-controllers)、 [sequelize](https://github.com/sequelize/sequelize)、[sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript) 构建的 Node.js 后台项目

## usage
```bash
> npm i
# 请先创建项目所用的数据库：`hotdog`，项目启动之后会自动创建所需要的表
> npm run watch-ts
> npm run watch-node
```

## API接口文档

## 效果演示

### 前端网址
[点我](https://hotdog.liangxinwei.cn/)（请用chrome手机模式预览）

##### 移动端扫描下方二维码
<img src="https://github.com/liangxinwei/hotdog-backend/blob/master/screenshots/frontend_qrcode.png" width="250" height="250"/>


## 目标功能
- [x] 项目启动时自动创建数据库和表
- [ ] IP 定位
- [ ] 地址管理
- [ ] 上传图片
- [ ] 登录、注册
- [ ] 用户信息管理
- [ ] 接入微信扫码登录
- [x] 部署上线
