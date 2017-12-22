const users = require('./users');
const auth = require('./auth');
const projects = require('./projects');
const passport = require('../passport/strategy.passport').passport;

module.exports = function(app){
  app.use('/api/protected',passport.authenticate('jwt', {session: false}));
  console.log(users.basicUrl,auth.basicUrl)
  app.use(users.basicUrl, users.router);
  app.use(auth.basicUrl, auth.router);
  app.use(projects.basicUrl, projects.router);
};