var express = require("express");
var router = express.Router();
var models = require("../models"); 
var authService = require("../services/auth"); 

router.get("/", function(req, res, next) {
  // let token = req.cookies.jwt;
  // if (token) {
  //   authService.verifyUser(token).then(user => {
  //     if (user) {
       models.posts
          .findAll({
            where: { UserId: 4 , Deleted: false }
          })
          .then(result => {  
          console.log(result)
          res.json(result)
        });
   
     
  //     } else {
  //       res.status(401);
  //       res.send("Invalid authentication token");
  //     }
  //   });
  // } else {
  //   res.status(401);
  //   res.send("Must be logged in");
  // }
});

router.get("/:id", function(req, res, next) {
  let postId = parseInt(req.params.id);
  models.posts.findOne({ where: { PostId: postId }, raw: true }).then(post => {
    console.log(post);
    res.send(JSON.stringify(post))
 
  });
});

router.post("/", function(req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token).then(user => {
      if (user) {
        models.posts
          .findOrCreate({
            where: {
              UserId: user.UserId,
              PostTitle: req.body.postTitle,
              PostBody: req.body.postBody
            }
          })
          .spread((result, created) =>  res.json())
        
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

router.delete("/:id", function(req, res, next) {
  let postId = parseInt(req.params.id);
  models.posts
    .update(
      { Deleted: true },
      {
       where: { PostId: postId }
      }
    )
    .then(result => res.status(200).send("deleted"));
});



router.put("/:id", function(req, res, next) {
  let postId = parseInt(req.params.id);
  console.log(req.body);
  console.log(postId);
  models.posts
    .update(req.body, { where: { PostId: postId } })
    .then(result => res.status(200).send("Post Update"));
    
});

module.exports = router;
