# hotdog 后台项目
基于 TypeScript、Koa、MySQL、[routing-controllers](https://github.com/typestack/routing-controllers)、 [sequelize](https://github.com/sequelize/sequelize)、[sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript) 开发的 [hotdog-frontend](https://github.com/liangxinwei/hotdog-frontend) Node.js 服务端项目。

## 说明
> 开发环境 macOS 10.15.4 Node.js 8.11.1 MySQL 8.0.12

> 部署环境 腾讯云 CentOS 7.2 64位

> 技术栈 Node.js + Koa + MySQL + sequelize + sequelize-typescript + routing-controllers + TypeScript

> 此项目主要用于学习使用 TypeScript 开发 Node.js 项目，不用于任何商业用途。

## usage
```bash
> npm i
# 请先创建项目所用的数据库：`hotdog`，项目启动之后会自动创建所需要的表
> npm run watch-ts
> npm run watch-node
```

## API接口文档
[hotdog-backend 接口文档](https://github.com/liangxinwei/hotdog-backend/blob/master/API.md)

## 效果演示

### 前端网址
[点我](https://hotdog.liangxinwei.cn/)（请用chrome手机模式预览）

##### 移动端扫描下方二维码
<img src="https://github.com/liangxinwei/hotdog-backend/blob/master/screenshots/frontend_qrcode.png" width="150" height="150"/>


## 目标功能
- [x] 项目启动时自动创建表
- [ ] 地址管理
- [ ] IP 定位
- [ ] 上传图片
- [ ] 登录、注册
- [ ] 用户信息管理
- [ ] 接入微信扫码登录
- [x] 部署上线
