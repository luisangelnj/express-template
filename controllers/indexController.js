const controller = {

    /*
    /* GET | api/
    */
    index: (req, res) => {
        res.json({
            "details": 'Home Route del sistema'
        });
    },

}

module.exports = controller;