export interface MysqlConfig {
  key: string;
  host: string[];
  user: string;
  password: string;
  database: string;
  modelPath: string;
}

export type ConfigItem = MysqlConfig | string | string[];

export interface ConfigMap {
  [key: string]: ConfigItem;
}
