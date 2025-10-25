import { Router } from "express";
import { createTodo } from "../controllers/todo.controllers.js";
import {verifyJWT} from "../../user/middlewares/auth.middlware.js"

const router = Router();

router.route("/create").post(verifyJWT,createTodo);

export default router;