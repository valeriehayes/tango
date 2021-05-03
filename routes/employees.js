var express = require('express');
const app = require('../app');
var router = express.Router();
// var mysqlx = require('mysqlx');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('employees');
});

router.get('/search', function(req, res, next) {
  //res.send('employee search');
  var dbSession = req.app.get('dbSession');

  var result = dbSession.then(
    s => s.sql('CALL GetEmployeesFilter(null, null, null, null, 1)')
      .execute());
  // var result =  dbSession.then(
  //   s => s.sql('SELECT * FROM employees').execute()
  // );

  // result.then(function(r) {
  //   res.send(r);
  // });
  // result.then(function(r) {
  //   res.render();
  // }).catch(e => { throw e; });
  result.then( function(r) {
    res.render('pages/employee_search', {
      employees: r.rows
    });
  });

  // res.render('pages/employee_search', {
  //   employees: employees
  // });
});

module.exports = router;
