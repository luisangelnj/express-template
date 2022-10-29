var express = require('express');
var router = express.Router();
const indexController = require('../../controllers/indexController');

/*
/*  GET | api/
*/
router.get('/', indexController.index);


module.exports = router;
