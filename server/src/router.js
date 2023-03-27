const express = require('express');

const router = express.Router();

const exploreController = require('./controllers/exploreController');

router.get('/explore', exploreController.getAll);


module.exports = router;