const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURI);
const app = express();
app.use(
   cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,     // cookie will expire after 30 days
      keys: [keys.cookieKey]
   })
);
app.use(passport.initialize());
app.use(passport.session());



require('./routes/authRoutes')(app);

let port = process.env.PORT || 5000;
app.listen(port, () => {
   console.log(`listening on port ${port}`);
});