var express = require('express');
const app = require('../app');
var router = express.Router();
//var mysqlx = require('mysqlx');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
