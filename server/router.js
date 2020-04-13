const router = require('express').Router();

router.get('/getRoom', (req, res) => {
    res.json({room: Math.ceil(Math.random() * 10000)}) // TODO: make get room function, check it against other existing rooms
});

module.exports = router;