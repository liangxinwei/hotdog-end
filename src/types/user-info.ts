export interface UserData {
  name: string;
  gender: number;
  age?: number;
}

export declare type UserInfo = UserData & {
  uid: number;
}
