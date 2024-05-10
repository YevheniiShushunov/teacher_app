const router = require("express").Router();
const {tokenCheck} = require("../middleware/tokenValidator")
const {isEmpty} = require("../middleware/dataValidator")
const {authorization, authentication} = require("../controllers/user.controller");

router.post('/auth', isEmpty, authorization);
router.get('/auth', tokenCheck, authentication);

module.exports = router;
