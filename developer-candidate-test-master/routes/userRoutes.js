const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.route('/everyone')
  .get(usersController.getEveryone);

router.route('/male')
  .get(usersController.getMale);

router.route('/female')
  .get(usersController.getFemale);

router.route('/under30')
  .get(usersController.getUnder30);

router.route('/over30')
  .get(usersController.getOver30);


module.exports = router;
