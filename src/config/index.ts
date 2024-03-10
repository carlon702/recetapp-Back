import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME:string = process.env.MONGO_USERNAME
const MONGO_PASSWORD:string = process.env.MONGO_PASSWORD

const MONGO_URL:string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@recetapp.ji0p50a.mongodb.net/
`;

const PORT:number = process.env.PORT


export const config = {
    mongo:{
        url: MONGO_URL
    },
    server:{
        port: PORT
    }
}