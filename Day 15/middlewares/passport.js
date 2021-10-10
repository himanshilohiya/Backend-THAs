const User = require("../models/User");
const SECRET_KEY = process.env.SECRET_KEY;
const { Strategy, ExtractJwt } = require("passport-jwt");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

const passport = async (p) => {
  p.use(
    new Strategy(opts, async (payload, done) => {
      console.log(payload);
      await User.findByPk(payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => {
          return done(null, false);
        });
    })
  );
};

module.exports = passport;
