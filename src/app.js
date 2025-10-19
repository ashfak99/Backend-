import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

import userRoute from './module/user/routes/user.routes.js';
import todoRoute from "./module/todo/routes/todo.router.js";

app.use('/api/users', userRoute);
app.use('/api/todos',todoRoute);

export default app;