import { Router } from "express";
import { UserService } from "../services/user.service.js";
import { handleValidation } from "../middleware/handleValidation.js";
import { createUSerSchema, getUserSchema, updateUserSchema } from "../schema/user.schema.js";
import { checkRoles } from "../middleware/auth.handler.js";
import passport from "passport";

const router = Router();
const service = new UserService();

router.get('/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('administrador'),
    async (req, res, next) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        next(error)
    }
})

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('administrador'),
    handleValidation(getUserSchema, 'params'), async (req, res, next) => {
    try {
        const studentId = parseInt(req.params.id, 10);
        const user = await service.findOne(studentId);
        res.json(user);
    } catch (error) {
        next(error);
    }
})

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    checkRoles('administrador'),
    handleValidation(createUSerSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newUser = await service.create(body);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
);

router.patch(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('administrador'),
    handleValidation(getUserSchema, 'params'),
    handleValidation(updateUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const studentId = parseInt(req.params.id, 10);
            const body = req.body;
            const user = await service.update(studentId, body);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
);

router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('administrador'),
    handleValidation(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const studentId = parseInt(req.params.id, 10);
            await service.delete(studentId);
            res.status(201).json({ studentId });
        } catch (error) {
            next(error);
        }
    }
);

export default router;

