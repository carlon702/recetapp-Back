import bcrypt from 'bcrypt';
import { config } from '../config';
import RecipeDao, { RecipeModel } from '../daos/RecipeDao';
import { RecipeI } from '../models/Recipe';


export async function create(recipe:RecipeI):Promise<RecipeModel>{
    

    try{
        const newRecipe = new RecipeDao({...recipe});
       
        return await newRecipe.save();

    } catch(e:any){
        throw new Error("Can't create recipe");
    }

}