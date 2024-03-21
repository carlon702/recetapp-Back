import {Request, Response} from 'express';
import { register } from '../services/UserService';
import { UserI } from '../models/User';
import {RegisterFailedError} from '../utils/AppErrors'

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
        if(e.message.includes('E11000 duplicate key error collection')){
            res.status(409).json({message: 'User with email already exists', error:e.message});
        } else {
            res.status(500).json({message:"Unable to register user", error:e.message});
        }
        
    }
}

export default {handleRegister};