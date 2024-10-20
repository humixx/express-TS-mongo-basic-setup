import { Router } from 'express';
import { createUser, getUsers } from '../controllers/userController';


const router: Router = Router();

// Route for getting all users
router.get('/', getUsers);

// Route for creating a new user
router.post('/', createUser);

export default router;
