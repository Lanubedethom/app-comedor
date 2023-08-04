import { Router } from "express";
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { configure } from "../config/config.js";

const router = Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, async (err, user, info) => {
        try {
            if (err || !user) {
                return res.json({ status: 401, message:info.message || 'Authentication failed'})
                //return res.status(401).json({ message: info.message || 'Authentication failed' });
            }
            const payload = {
                sub: user.id,
                role: user.role,
            };
            const token = jwt.sign(payload, configure.jwtSecret);
            res.header('Authorization', 'Bearer ' + token);
            res.json({
                user,
                token,
            });
        } catch (error) {
            next(error);
        }
    })(req, res, next);
});

router.post('/logoutt', async (req, res, next) => {
    try {
        res.cookie("token", "", {
            httpOnly: true,
            secure: true,
            expires: new Date(0),
        });

        return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        next(error)
    }
})

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

export default router;

