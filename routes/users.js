var express = require('express');
var router = express.Router();

var userService = require('../api/services/userService');
const User = require('../api/model/userModel');


/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(userService);
  try {
    var list = userService.findAll().then(function (projects) {
      console.log(JSON.stringify(projects))
      res.send(JSON.stringify(projects));
    });
    // res.json(list)
    // var list = User.sync().then(function () {
    //   // Table created
    //   return User.findAll().then(function (projects) {
    //     // Table created
    //     console.log(JSON.parse(JSON.stringify(projects)));
    //   });
    // });
    console.log(list);
    // res.json(JSON.stringify(list))

  } catch (err) { next(err) }
  // res.send('respond with a resource');
});

module.exports = router;
