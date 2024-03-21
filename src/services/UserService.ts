import bcrypt from 'bcrypt';
import { config } from '../config';
import UserDao, { UserModel } from '../daos/UserDao';
import { UserI } from '../models/User';
import { UserDoesNotExistError } from '../utils/AppErrors';


export async function register(user:UserI):Promise<UserModel>{
    

    try{
        const hashedPassword = await bcrypt.hash(user.password, 10);

        const newUser = new UserDao({...user, password:hashedPassword});
       
    
        return await newUser.save();


    } catch(e:any){
        throw new Error("Can't create user");
    }

}

export async function findAllUsers():Promise<UserModel[]>{

    try{
        const users = await UserDao.find();
        return users;
    }catch(e:any){
        return [];
    }
}

export async function findUserById(userId:string):Promise<UserModel>{

    try{
        const user = await UserDao.findById(userId);

        if(user){
            return user
        } else {
            throw new UserDoesNotExistError('User does not exist');
        }

    }catch(e:any){
        throw new Error(e.message);
    }
}

