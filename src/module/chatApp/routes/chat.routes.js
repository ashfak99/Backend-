import { Router } from "express";
import {
    sendMsg
} from "../controller/msg.controller.js"

import { verifyJWT } from "../../user/middlewares/auth.middlware.js";
const router = Router();

router.route("/send:id").post(verifyJWT,sendMsg);

export {router}