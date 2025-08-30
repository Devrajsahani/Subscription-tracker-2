import {Router} from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { getUser, getUsers } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/',getUsers);
userRouter.get('/:id',authorize,getUser); //here we have used the middleware in this so it is simple to inject the middleware in any routes.
userRouter.post('/',(req,res)=>res.send({title:'Create user'}));
userRouter.put('/:id',(req,res)=>res.send({title:'Update user'})); // here we are using the routes to edit the details of the user
userRouter.delete('/:id',(req,res)=>res.send({title:'Delete user'}));

export default userRouter;