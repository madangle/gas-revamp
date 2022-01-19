export interface IUserLocal {
  Id?: string;
  Email?: string;
  UserName?: string;
  Token?: string;
}
 
  
export interface IUser {
  isAuth: boolean;
  User?: IUserLocal ;
  AuthType?: AuthType;
}
  
export enum AuthType {
  local
}