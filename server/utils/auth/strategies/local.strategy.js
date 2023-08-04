import { Strategy } from 'passport-local';
import { UserService } from "../../../services/user.service.js";
import boom from "@hapi/boom";
import bcrypt from "bcrypt";

const service = new UserService();

export const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await service.findByEmail(email);
        if (!user) {
            return done(null, false, { message: 'The email does not exist' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'The password is incorrect' });
        }
        delete user.password;
        return done(null, user);
    } catch (error) {
        return done(error);
    }
});



