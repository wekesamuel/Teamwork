const pool = require('../queries');

exports.createUser = (req,res) => {
    pool.query('SELECT * FROM reflections', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
};