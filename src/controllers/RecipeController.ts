import {Request, Response} from 'express';
import { create } from '../services/RecipeService';
import { RecipeI } from '../models/Recipe';
//import {RegisterFailedError} from '../utils/AppErrors' crear error 

async function addRecipe(req:Request, res:Response){

    const recipe:RecipeI = req.body;
   
    try{
        const createdRecipe = await create(recipe);

        res.status(201).json({
            message: "Recipe created",
            recipe: {
                title: createdRecipe.title,
                description:createdRecipe.description,
                categories:createdRecipe.categories,
                ingredients:createdRecipe.ingredients,
                coverImage:createdRecipe.coverImage,
                detailImages:createdRecipe.detailImages,
                time:createdRecipe.time,
                restriction:createdRecipe.restriction,
                comments:createdRecipe.comments,
                punctuation:createdRecipe.punctuation
            }
        })
    }catch(e:any){
        if(e.message.includes('E11000 duplicate key error collection:')){
            res.status(409).json({message: 'Recipe with that title already exists', error:e.message});
        } else {
            res.status(500).json({message:"Unable to create recipe", error:e.message});
        }
        
    }
}

export default {addRecipe};