import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import cors from 'cors';
import {config} from './config';
import {appRoutes} from './routes';


const port = config.server.port;

const app: Express = express();


app.use(express.json());
app.use(cors());


(async function startUp(){
  try{
      await mongoose.connect(config.mongo.url, {w:"majority", retryWrites:true, authMechanism:"DEFAULT"});

      console.log("Connection to DB stablished");


      appRoutes(app);
      
      app.listen(port, ()=>{
          console.log(`Server listening on port ${port}`)
      })
       
  } catch(error){

      console.log("Couldn't connect to DB");

  }
})();