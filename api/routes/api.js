var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var Blog = require("../models/blog");
var Meta = require("../models/meta");



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
     
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          var token = jwt.sign({ user: user._id }, config.secret);
          user.session = token;
          user.save(function(err,updatesession){
            res.json({success: true, token:token , message:'user successfully login',data:user});
          })
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

router.post('/addblog', function(req, res) {
let blog = req.body;

if(blog.title && blog.subject){
  var model = new Blog();
  model.title = blog.title;
  model.subject = blog.subject;
  model.article = blog.article;
  
  model.save(function(err,blog){
    if(err){
      res.json({code:404,success:false,data:err})
    }else{
      res.json({code:200,success:true,data:blog,message:'Blog Added sucessfully'})
    }
  })
}
});

// router.get('/getblog', function(req, res) {
 
//   Blog.find(query,function(err,blog){
//     if(err){
//       res.json({code:200,data:err,success:false})
//     }else{
//       res.json({code:200,data:blog,success:true,message:'blog retrieve successfully'})
//     }
//   })
//   });

  router.get('/getblog', function(req, res, next) {
    var perPage = 4
    var page = req.query.page || 1

    Blog.find({})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function(err, blog) {
          Blog.count().exec(function(err, count) {
                if (err){
                  res.json({code:200,data:err,success:false})
                }else{
                  res.json({code:200,
                            data:blog,
                            success:true,
                            message:'blog retrieve successfully',
                            current: page,
                            total: Math.ceil(count / perPage)
                          }) 
                }
               
            })
        })
})

  router.get('/getSingleblog', function(req, res) {
   
    Blog.findById(mongoose.Types.ObjectId(req.query.ID), function(err,blog){
      if(err){
        res.json({code:200,data:err,success:false})
      }else{
        res.json({code:200,data:blog,success:true,message:'Single blog retrieve successfully'})
      }
    })
    });
  
    router.get('/deleteblog', function(req, res) {
   
      Blog.remove({_id:mongoose.Types.ObjectId(req.query.ID)}, function(err,blog){
        if(err){
          res.json({code:200,data:err,success:false})
        }else{
          res.json({code:200,success:true,message:'Blog delete successfully'})
        }
      })
      });


router.get('/current_user', function(req, res) {
    if(req.cookies.token==undefined){
      res.json({code:404,success:false,message:"user not found"})
    }else{
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
    }
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

  router.get('/meta', function(req, res) {
    Meta.findOne({path:req.query.path},function(err,metadata){
      if(err){
        res.json({code:404,success:false,message:'something went wrong'})
      }else{
        res.json({code:200,success:true,data:metadata})
      }
    })
    
  });





module.exports = router;