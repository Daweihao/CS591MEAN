var express = require('express');
let request = require('request');
var router = express.Router();


/* GET home page. */
// router.get('/', function(req, res, next) {
//
//   content('http://api.openweathermap.org/data/2.5/weather?zip=02134,us&APPID=f5e514b6004f80bff3f022eeab5b3137').then(response =>{
//     let temp = response.main.temp * 9/5 - 459.67;
//     temp = temp.toFixed(2);
//     res.render('index',{title : response.name,
//       weather: response.weather[0].main,
//       low_temp : (response.main.temp_min * 9/5 - 459.67).toFixed(2),
//       high_temp: (response.main.temp_max * 9/5 - 459.67).toFixed(2),
//       temp : temp,
//       wind_speed: response.wind.speed
//                         })
//   }).catch(error =>{
//     console.log('Entering Error');
//     res.send(error);
//   });
//   // tRequest(options);
// });
router.get('/:name', function(req, res, next) {
  const loc= req.params['name'];
  console.log(loc);
  const url = "http://api.openweathermap.org/data/2.5/weather?q="+ loc+ "&APPID=f5e514b6004f80bff3f022eeab5b3137" ;

  request(url, function(err, response, body) {
    if (!err && response.statusCode == 200) {
      // const drink = JSON.parse(body);
      let temp = response.main.temp * 9/5 - 459.67;
      const weather = {
        weather: response.weather[0].main,
        low_temp : (response.main.temp_min * 9/5 - 459.67).toFixed(2),
        high_temp: (response.main.temp_max * 9/5 - 459.67).toFixed(2),
        temp : temp
      };

      res.send(weather);
    } else {
      console.log(err);
    }
  });
});
module.exports = router;
