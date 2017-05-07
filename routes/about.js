const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('About/about.ejs')
});

module.exports = router;
