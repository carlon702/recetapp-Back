import mongoose, {Schema, Document} from 'mongoose';
import {RecipeI} from "../models/Recipe";



export interface RecipeModel extends RecipeI, Document {};

const RecipeSchema = new Schema(
    {
        title: {type:String, required:true, unique:true},
        description: {type:String, required:false},
        categories: {type:Array, required:true},
        ingredients: {type:Array, required:true},
        coverImage: {type:String, required:true},
        detailImages:{type:Array, required:true},
        time:{type:Number, required:true},
        restriction:{type:Array, required:true},
        comments:{type:Array, required:true},
        punctuation:{type:Number, required:false}
    },
    {
        versionKey: false
    }
);

export default mongoose.model<RecipeModel>('Recipe', RecipeSchema);