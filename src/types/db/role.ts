export interface RoleData {
  name: string;
  status: number;
  remark?: string;
}

export declare type RoleInfo = RoleData & {
  id: number;
}
