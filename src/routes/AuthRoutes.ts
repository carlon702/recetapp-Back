import express from 'express';
import AuthController from '../controllers/AuthController';
import {Schemas, ValidateSchema} from '../middlewares/Validations'

const router = express.Router();

router.post('/register', ValidateSchema(Schemas.user.register, 'body'), AuthController.handleRegister);

export = router;