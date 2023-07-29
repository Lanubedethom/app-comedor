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
            done(boom.unauthorized(), false);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            done(boom.unauthorized(), false);
        }
        delete user.password;
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});


