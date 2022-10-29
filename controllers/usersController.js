const controller = {

    /*
    /* GET | api/users/listing 
    */
    listing: (req, res) => {
        res.json({
            'details': [
                {
                    'id': 1,
                    'name': 'Luis'
                },
                {
                    'id': 2,
                    'name': 'Pedro'
                }
            ],
        });
    },

}

module.exports = controller;