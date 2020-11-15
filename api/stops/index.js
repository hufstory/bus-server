var express = require('express');
var router = express.Router();
const controller = require('./stop.controller');

/*/!* GET stops listing. *!/
router.get('/', function(req, res, next) {
    res.send(stops);
});*/

router.get('/', controller.getAll);

module.exports = router;