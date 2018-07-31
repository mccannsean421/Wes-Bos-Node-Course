const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send(req.query.name);
});

router.get('/reverse/:name', (req, res) => {
  res.send(req.params.name.split('').reverse().join(''));
});

module.exports = router;
