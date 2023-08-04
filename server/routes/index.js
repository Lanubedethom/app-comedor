import { Router } from "express";
import routerStudent from './student.router.js'
import routerUser from './user.router.js'
import routerAuth from './auth.router.js';
import routerBook from './book.router.js';

export const routerApi = (app) => {
    const router = Router();
    app.use("/api/v1", router);
    router.use("/students", routerStudent);
    router.use('/users', routerUser);
    router.use('/auth', routerAuth);
    router.use('/book', routerBook)
};


