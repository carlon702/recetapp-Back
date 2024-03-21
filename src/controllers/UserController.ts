import {Request, Response} from 'express';
import { findAllUsers, findUserById } from '../services/UserService';
import { UserDoesNotExistError } from '../utils/AppErrors';


async function getAllUsers(req:Request, res:Response){
    try{
        let users = await findAllUsers();
        res.status(200).json({message:"Users succesfully retrieved", users});
    }catch(e:any){
        res.status(500).json({message:"Unable to retrieve users", error:e.message});
    }
}

async function getUserById(req:Request, res:Response){

    const userId = req.params.userId;

    try{
        let user = await findUserById(userId);
        res.status(200).json({message: 'User found', user});
    } catch(e:any){
        if(e instanceof UserDoesNotExistError){
            res.status(404).json({message:'User does not exist'});
        } else {
            res.status(500).json({message:'Something went wrong', error:e.message});
        }
    }
}

export default {getAllUsers, getUserById};