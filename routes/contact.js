const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('Contact/contact.ejs')
});

module.exports = router;
