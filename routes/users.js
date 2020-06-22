var express = require('express');
var router = express.Router();
const UsersCtrl = require('../api/controller/usersCtrl');

router.post('/', async function (req, res, next) {
  var reqBody = req.body;
  var resData;
  switch (reqBody.cmd) {
    case 'Register':
      resData = await UsersCtrl.submitOrder(reqBody, res);
      break;
    case 'PayOrder':
      resData = await UsersCtrl.addToCharts(reqBody, res);
      break;
  }
  res.json(resData);
});

module.exports = router;
