export interface UserData {
  name: string;
  gender: number;
  age?: number;
}

export declare type User = UserData & {
  uid: number;
}
