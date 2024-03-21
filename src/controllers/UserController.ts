import {Request, Response} from 'express';
import { findAllUsers, findUserById, modifyUser, removeUser } from '../services/UserService';
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
            res.status(500).json({message:'Unable to find user', error:e.message});
        }
    }
}

async function updateUser(req:Request, res:Response){
    
    const user = req.body;

    try{
        let updatedUser = await modifyUser(user);
        res.status(202).json({message:"User updated", user: updatedUser});
    }catch(e:any){
        if(e instanceof UserDoesNotExistError){
            res.status(404).json({message: 'User does not exist'});
        } else {
        res.status(500).json({message:'Unable to update user', error:e.message});
    }
    }
}

async function deleteUser(req:Request, res:Response){

    const userId = req.params.userId;

    try{
        let deleted = await removeUser(userId);
        res.status(202).json({message:'User deleted', deleted})
    }catch(e:any){
        if(e instanceof UserDoesNotExistError){
            res.status(404).json({message: 'User does not exist'});
        } else {
        res.status(500).json({message:'Unable to delete user', error:e.message});
    }
    }
}

export default {getAllUsers, getUserById, updateUser, deleteUser};