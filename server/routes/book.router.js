import { Router } from "express";
import { BookService } from "../services/book.service.js";

const router = Router();
const service = new BookService();

router.post(
    '/',
    async (req, res, next) => {
        try {
            // verificar si existe el estudiante
            const user = await service.findByCode(req.body.code)
            if (!user) {
                //res.status(404).json({ message: 'not found student'})
                res.json({ status: 404, message: 'not found student'})
            }
            //verificar si ya tiene una reserva: dinner = true
            const hasBooked = await service.checkIfHaveBooked(user);
            if (hasBooked) {
                res.json({ status: 200, message: 'student has already booked'})
            } else {
                const response = await service.checkBook(user);
                if (response) {
                    //res.status(200).json({ message: 'book done'})
                    res.json({ status: 200, message: 'book done'})
                } else {
                    //res.status(409).json({ message: 'sold out'})
                    res.json({ status: 409, message: 'sold out'})
                }
            }

        } catch (error) {
            next(error);
        }
    }
);


export default router;