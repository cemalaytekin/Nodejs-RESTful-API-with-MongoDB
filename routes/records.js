var express = require('express');
var router = express.Router();
const recordsController = require('../controllers/records')

/*
  Post endpoint for getting records.
  Check controller function for more detail
*/
router.post('/',recordsController.getRecords)

module.exports = router
