var express = require('express');
var router = express.Router();

// Index
router.get('/', async function(req, res, next) {
  try {
      res.render('index')
  } catch (error) {
      res.status(400).json({mensaje: error})
  }
});

module.exports = router;
