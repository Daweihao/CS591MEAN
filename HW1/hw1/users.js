var express = require('express');
var router = express.Router();
let myObj = {name:"Haoran Wei"};
// method 1 Transforming obj to JSON: let myJSON = JSON.stringify(myObj);
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send(myJSON);
  // method 2 use res.json() to send obj
  res.json(myObj);
});



module.exports = router;
