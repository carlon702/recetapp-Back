export interface UserI{
    type: 'ADMIN' | 'USER';
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    country:string;
    favorites:string[];
}

//el modelo se importa en ../daos/UserDaos