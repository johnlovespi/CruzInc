const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index')
});


router.get('/show', (req, res) => {
  res.render('show', {

    results: res.results || [],
    favorites: res.favorites || [],
  });
});









// This route serves your `/login` form
router.get('/login', (req, res) => {
  res.render('login');
});



// This route serves your `/signup` form
router.get('/signup', (req, res) => {
  res.render('signup');
});



// background image function
// router.get('/', getRandomImage, (req, res) => {
//  // res.json(res.results);
//     res.render('index', {
//       image: res.image,
//     });
// })


module.exports = router;
