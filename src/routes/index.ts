import { Express, Request, Response } from "express";
import authRoutes from "./AuthRoutes";
import userRoutes from "./UserRoutes";


export function appRoutes(app:Express){

    app.get('/status', (req:Request, res:Response)=>{
        res.status(200).json({message: "Si ven esto los quiero"});
    })

    app.use('/auth', authRoutes);

    app.use('/users', userRoutes);
}