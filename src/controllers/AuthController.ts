import {Request, Response} from 'express';
import { register } from '../services/AuthService';
import { UserI } from '../models/User';

async function handleRegister(req:Request, res:Response){

    const user:UserI = req.body;
   
    try{
        const registeredUser = await register(user);

        res.status(201).json({
            message: "User created",
            user: {
                _id: registeredUser._id,
                type: registeredUser.type,
                firstName: registeredUser.firstName,
                lastName: registeredUser.lastName,
                email: registeredUser.email
            }
        })
    }catch(e:any){
        res.status(500).json({message:"Unable to register user"});
    }
}

export default {handleRegister};