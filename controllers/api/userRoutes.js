const router = require('express').Router();
const { User } = require('../../models');

// Get all the users info back
/*
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);

  } catch (err) {
    res.status(500).json(err);
  }
});
*/

// Create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({name: req.body.username, password: req.body.password});

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Compare email and password with database to see if credentials are valid and login the user
router.post('/login', async (req, res) => {
  try {
    // Find a user with the inputted name
    const userData = await User.findOne({ where: { name: req.body.username } });
    // If name doesnt exist send back an error
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    } 
    // Compare password stored in db with inputted password
    const validPassword = await userData.checkPassword(req.body.password);
    // If password doesnt exist send back an error
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    
    req.session.save(() => {
      // Stores the id and whether the user is logged in or not in session
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout the user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
