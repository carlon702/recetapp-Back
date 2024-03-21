import {Request, Response} from 'express';
import { findAllUsers } from '../services/UserService';


async function getAllUsers(req:Request, res:Response){
    try{
        let users = await findAllUsers();
        res.status(200).json({message:"Users succesfully retrieved", users});
    }catch(e:any){
        res.status(500).json({message:"Unable to retrieve users", error:e.message});
    }
}

export default {getAllUsers};