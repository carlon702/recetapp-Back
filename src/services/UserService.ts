import bcrypt from 'bcrypt';
import { config } from '../config';
import UserDao, { UserModel } from '../daos/UserDao';
import { UserI } from '../models/User';

export async function register(user:UserI):Promise<UserModel>{
    const rounds = config.server.rounds;

    try{
        const hashedPassword = await bcrypt.hash(user.password, rounds);

        const newUser = new UserDao({...user, password:hashedPassword});

        return await newUser.save()


    } catch(e:any){
        throw new Error("Can't create user");
    }

}