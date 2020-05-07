# 接口文档
```bash
baseUrl: https://hotdog.liangxinwei.cn/backend/
```
目录：
1. [获取地址](#1获取地址)
2. [获取所有省份](#2获取所有省份)
3. [获取指定省份的城市](#3获取指定省份的城市数据)


## 1、获取当前所有用户

#### 请求URL：
```
[get] /v1/list
```

[点我查看示例](https://hotdog.liangxinwei.cn/backend/v1/list)

#### 请求参数
无

#### 返回示例
```
{
    "code": 200,
    "data": [
        {
            "uid": 1,
            "name": "Niko",
            "age": 0,
            "gender": 1
        },
        {
            "uid": 2,
            "name": "zhangsan",
            "age": 0,
            "gender": 1
        },
    ]
}
```

## 2、获取所有省份

#### 请求URL：
```
[get] /v1/area/province
```
[点我查看示例](https://hotdog.liangxinwei.cn/backend/v1/area/province)

#### 请求参数
无

#### 返回示例
```
{
    "code": 200,
    "data": [
        {
            "code": "11",
            "name": "北京市"
        },
        {
            "code": "12",
            "name": "天津市"
        },
        {
            "code": "13",
            "name": "河北省"
        },
        {
            "code": "14",
            "name": "山西省"
        },
    ]
}
```

## 3、获取指定省份的城市数据

#### 请求URL：
```
[get] /v1/area/city
```
[点我查看示例](https://hotdog.liangxinwei.cn/backend/v1/area/city?provinceCode=14)

#### 请求参数
#### query
|  参数   | 是否必选  |  类型  |  说明  |
|  ----  | ----  | ----  | ----  |
| provinceCode  | 是 | string | 省份 code |

#### 返回示例
```
{
    "code": 200,
    "data": [
        {
            "code": "1401",
            "provinceCode": "14",
            "name": "太原市"
        },
        {
            "code": "1402",
            "provinceCode": "14",
            "name": "大同市"
        },
        {
            "code": "1403",
            "provinceCode": "14",
            "name": "阳泉市"
        },
    ]
}
```
