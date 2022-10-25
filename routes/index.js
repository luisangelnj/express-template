var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);


// 404 | Page Not Found
router.get('*', (req, res) => { 
  res.status(404).json({
    "details": 'Esta ruta no se encuentra en el servidor'
  });
});

module.exports = router;
