var express = require('express'),
    User = require('../models/User'),
    Post = require('../models/Post'),
    Short = require('../models/short'),
    Objective = require('../models/Objective'),
    Answer = require('../models/Answer');

var router = express.Router();

/* GET home page. */
router.post('/id', function(req, res, next) {
  var answer = new Answer({
    email : req.body.email,
    title : req.body.title,
    content : req.body.content,
    check : req.body.check,
    short : req.body.short,
    opinion : req.body.opinion
  });
});

router.get('/signin', function(req, res, next) {

});

router.post('/signin', function(req, res, next) {

});

router.get('/signout', function(req, res, next) {

});

module.exports = router;
