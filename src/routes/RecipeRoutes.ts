import express from 'express';
import  RecipeController from '../controllers/RecipeController';

const router = express.Router();

router.post('/add', RecipeController.addRecipe);

export = router;