export interface UserI{
    type: 'ADMIN' | 'USER';
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}