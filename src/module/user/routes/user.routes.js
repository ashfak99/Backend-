import {Router} from 'express';
import { createUser } from '../controllers/user.controllers.js';
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

router.route('/create').post(upload.fields([{
    name : "avatar",
    maxCount : 1
}]),createUser);

export default router;