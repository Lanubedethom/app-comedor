import passport from 'passport';
import { localStrategy } from "./strategies/local.strategy.js";
import { jwtStrategy } from "./strategies/jwt.strategy.js";

export const configurePassport = () => {
    passport.use('local', localStrategy);
    passport.use('jwt', jwtStrategy);
}

