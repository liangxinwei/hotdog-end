// 类型定义的文件规定后缀为 .d.ts

export interface MysqlConfig {
  key: string;
  host: string[];
  user: string;
  password: string;
  database: string;
}

export type ConfigItem = MysqlConfig | string | string[];

export interface ConfigMap {
  [key: string]: ConfigItem;
}
