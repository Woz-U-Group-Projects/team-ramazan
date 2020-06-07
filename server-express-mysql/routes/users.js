var express = require("express");
var router = express.Router();
var models = require("../models"); 
var authService = require("../services/auth"); 

/* GET users  */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/signup", function(req, res, next) {
  res.render("signup");
});

// Create new user if one doesn't exist//
router.post("/signup", function(req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.username
      },
      defaults: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Password: authService.hashPassword(req.body.password) 
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.send("User successfully created");
      } else {
        res.send("This user already exists");
      }
    });
});

router.get("/login", function(req, res, next) {
  res.render("login");
});

// Login user and return JWT as cookie//
router.post("/login", function(req, res, next) {
  models.users
    .findOne({
      where: {
        Username: req.body.username
      }
    })
    .then(user => {
      if (!user) {
        console.log("User not found");
        return res.status(401).json({
          message: "Login Failed"
        });
      } else {
        let passwordMatch = authService.comparePasswords(
          req.body.password,
          user.Password
        );
        if (passwordMatch) {
          let token = authService.signUser(user);
          res.cookie("jwt", token);
          //res.send(JSON.stringify(post))
          //res.redirect("/profile");
          res.json({jwt:token})
        } else {
          console.log("Wrong password");
          res.send("Wrong password");
        }
      }
    });
});
/* GET profile */
router.get("/profile", function(req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token).then(user => {
      if (user) {
        models.users
          .findAll({
            where: { UserId: user.UserId },
            include: [{ model: models.posts }]
          })
          .then(result => {
            console.log(result);
            res.json(result)
            
          });
      } else {
        res.status(401);
        res.send("Invalid authentication token");
      }
    });
  } else {
    res.status(401);
    res.send("Must be logged in");
  }
});
// Logout/
router.get("/logout", function(req, res, next) {
  res.cookie("jwt", "", { expires: new Date(0) });
  res.redirect("login");
});





module.exports = router;
