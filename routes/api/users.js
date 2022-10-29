var express = require('express');
var router = express.Router();
const usersController = require('../../controllers/usersController');

/*
/* GET | api/users/listing
 */
router.get('/listing', usersController.listing);



// 404 | Page Not Found
router.get('*', (req, res) => {
    res.status(404).json({
        "details": '404 | Not Found'
    });
});

module.exports = router;
