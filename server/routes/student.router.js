import { Router } from "express";
import { StudentService } from "../services/student.service.js";
import { handleValidation } from "../middleware/handleValidation.js";
import { createStudentSchema, getStudentSchema, updateStudentSchema } from "../schema/student.schema.js";
import { checkRoles } from "../middleware/auth.handler.js";
import passport from "passport";

const router = Router();
const service = new StudentService();

router.get('/',
    async (req, res, next) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        next(error)
    }
})

router.get('/diner', async (req, res, next) => {
    try {
        const response = await service.findByDiner();
        res.json(response);
    } catch (error) {
        next(error);
    }
})

router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    checkRoles('administrador', 'cocinero', 'seguridad'),
    handleValidation(getStudentSchema, 'params'),
    async (req, res, next) => {
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
    checkRoles('administrador', 'cocinero', 'seguridad'),
    handleValidation(createStudentSchema, 'body'),
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
    checkRoles('administrador', 'cocinero', 'seguridad'),
    handleValidation(getStudentSchema, 'params'),
    handleValidation(updateStudentSchema, 'body'),
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
    checkRoles('administrador', 'cocinero', 'seguridad'),
    handleValidation(getStudentSchema, 'params'),
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

