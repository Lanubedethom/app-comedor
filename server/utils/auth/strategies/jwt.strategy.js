import pkg from 'passport-jwt';
import { configure } from "../../../config/config.js";

const { Strategy, ExtractJwt } = pkg;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: configure.jwtSecret
}

export const jwtStrategy = new Strategy(options, (payload, done) => {
    return done(null, payload)
})

