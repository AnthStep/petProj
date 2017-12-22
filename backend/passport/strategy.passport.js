const jwt = require('jsonwebtoken');
const passport = require("passport");
const passportJWT = require("passport-jwt");
const User = require("../schemas/user.schema");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromHeader("authorization");
jwtOptions.secretOrKey = 'secretKey';

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    var user = User.findById(jwt_payload.id, (err, user) => {
        if (user && user.last_login == jwt_payload.last_login) {
            next(null, user);
        } else {
            next(null, false);
        }
    });
});

passport.use(strategy);

module.exports = {
    passport : passport,
    jwtOptions : jwtOptions,
    jwt : jwt
}