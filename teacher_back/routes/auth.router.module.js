const router = require('express').Router();
const {tokenCheck} = require('../middleware/tokenValidator')

const {authorization, authentication} = require("../controllers/user.controller");

router.post('/auth', authorization);
router.get('/auth', tokenCheck, authentication);

module.exports = router;
