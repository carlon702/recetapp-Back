import Joi, {ObjectSchema} from 'joi';
import { NextFunction, Request, Response } from 'express';
import { UserI } from '../models/User';
import { UserModel } from '../daos/UserDao';

export function ValidateSchema(schema: ObjectSchema, property:string){

    return async(req:Request,res:Response, next:NextFunction)=>{
        try{
            if(property==='params'){
                await schema.validateAsync(req.params)
            } else {
                await schema.validateAsync(req.body)
            }
            next();
        }catch(e:any){
            return res.status(422).json({
                message: "Validation Failed"
            })
        }
    }
}


export const Schemas = {
    user:{
        register: Joi.object<UserI>({
            type: Joi.string().valid("ADMIN", "USER").required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/).required(),
            password: Joi.string().required()
        }),
        userId: Joi.object<{userId:string}>({
            userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }),
        update: Joi.object<UserModel>({
            _id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            type: Joi.string().valid('ADMIN', 'USER').required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/).required(),
            password: Joi.string()
        })
    }
}
