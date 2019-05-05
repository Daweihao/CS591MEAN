var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.post('/show', function (req, res) {
    // post will return the body message wrapped in request.
  let myObj = {message:req.body.message};
  res.send(myObj);
});
module.exports = router;
