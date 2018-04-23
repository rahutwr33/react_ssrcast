var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var Book = require("../models/book");



router.post('/signup', function(req, res) {
 
  if (!req.body.email || !req.body.password) {
    res.json({success: false, msg: 'Please pass email and password.'});
  } else {
    var newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    });
    newUser.save(function(err) {
      if (err) {
        console.log(err)
        return res.json({success: false, msg: 'email already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

router.post('/signin', function(req, res) {
 
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          var token = jwt.sign({ user: user._id }, config.secret);
          user.session = token;
          user.save(function(err,updatesession){
            res.json({success: true, token:token});
          })
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

router.post('/getdata', function(req, res) {
let data = {
  "name":"wdaawdh"
   }
   res.json({success:true,data:data,message:"data retrieve successfully"})
});


router.get('/current_user', function(req, res) {
 
    let token = req.cookies.token;
    var decoded = jwt.verify(token, config.secret);
     
    User.findById(mongoose.Types.ObjectId(decoded.user),function(err, user) {
     if(err){
      res.json({code:404,success:false,message:"something wrong"})
     }else{
       if(user){
         if(user.session==token){
          res.json({code:200,success:true,message:"user successfully found",data:user})
         }
        }
     }
    })
  });

  router.post('/logout', function(req, res) {
   
    let token = req.body.cookies;
    var decoded = jwt.verify(token, config.secret);
  
    User.findById(mongoose.Types.ObjectId(decoded.user),function(err, user) {
     if(err){
      res.json({code:404,success:false,message:"something wrong"})
     }else{
    
       if(user){
         user.session = ""
         user.save(function(err,updatesession){
          res.json({code:200,success: true,message:'user logout successfully'});
        })
       }
     }
    })
  });




module.exports = router;
