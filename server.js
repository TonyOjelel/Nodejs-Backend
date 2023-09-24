// Import libraries
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// App setup
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(session({ secret: 'secretkey', resave: true, saveUninitialized: true }));
app.use(passport());
app.use(passport.session());

// MongoDB setup
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console('MongoDB connected successfully'))
.catch(err => console.log(err));

// Model
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String
}));

// Passport setup
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserialize());

// Routes
// Authentication
app.post('/register', async (req, res) => {
  User.register(new User username: req.body.username }), req.body.password, (err, user) => {
    if(err) {
      res.status(500).send(err);
    }
    passport('local')(req, res, () => {
      res.send(user);
    });
  });
});

app.post('/login', passport.authenticate('local'), (req, res) => {
	res.send(req.user});

app.get('/logout', function(req, res){
  req.logout();
  res.send('Logged out');
});

// CRUD operations for User
app.get('/users', async (req, res) {
  const users = await User.find({});
  res.send(users);
});

app.post('/users', async (req, res) => {
  const newUser = await new User(req.body).save();
 .send(newUser);
});

app.put('/users/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
 .send(updatedUser);
});

app.delete('/users/:id', async (req, res) => {
  const deletedUser = await User.findByIdAndRemove(req.params.id);
  res.send(deletedUser});

// Server setup
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
