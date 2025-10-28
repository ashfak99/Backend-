import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser"

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

import userRoute from './module/user/routes/user.routes.js';
import todoRoute from "./module/todo/routes/todo.router.js";
import tweetRouter from "./module/social_media/routes/tweet.routes.js";

app.use('/api/users', userRoute);
app.use('/api/todos',todoRoute);
app.use('/api/thoughts',tweetRouter);

export default app;