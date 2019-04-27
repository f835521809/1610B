var express = require('express');
var router = express.Router();
var query=require("../mysql/index")
/* GET home page. */
router.get('/sign', function(req, res, next) {
   query('select * from sign',function(err,result){
        if(err){
           console.log(err)
        }else{
          res.json(result)
        }
   })
});
router.post('/sign/add', function(req, res, next) {
  var params = req.body,
      phone = params.phone,
      company = params.company,
      address = params.address,
      create_time = params.start_time,
      latitude=params.latitude,
      longitude=params.longitude;
  query('insert into sign (phone,company,address) values (?,?,?)' , [phone, company, address], function(err, result) {
      if (err) {
        console.log(err)
          res.json({ code: -1, msg: err })
      } else {
          res.json({ code: 1, result })
      }
  })
})
router.post('/sign/changeCard', function(req, res, next) {
    var { status, id } = req.body;
    console.log(id)
    query('update sign set status=? where id=?', [status, id], function(err, result) {
        if (err) {
            console.log(err)
            res.json({ code: -1, msg: err })
        } else {
            res.json({ code: 1, result })
        }
    })
})
router.post('/sign/abandon', function(req, res, next) {
    var { status, id } = req.body;
    console.log(id)
    query('update sign set status=? where id=?', [status, id], function(err, result) {
        if (err) {
            console.log(err)
            res.json({ code: -1, msg: err })
        } else {
            res.json({ code: 1, result })
        }
    })
})



module.exports = router;

