import {Router} from 'express';

import { createUser,
    loginUser,
    logoutUser,
    getUserById,
    deleteUser,
    forgetPassword,
    getOtherUser, } from '../controllers/user.controller.js';

import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from '../middlewares/auth.middlware.js';

const router = Router();

router.route('/create').post(upload.fields([{
    name : "avatar",
    maxCount : 1
}]),createUser);

router.route('/login').post(loginUser);
router.route('/logout').post(verifyJWT,logoutUser);
router.route('/userdetails').get(verifyJWT,getUserById);
router.route('/deleteUser').delete(verifyJWT,deleteUser);
router.route('/forgetPassword').post(forgetPassword);
router.route('/friends').get(verifyJWT,getOtherUser);

export default router;