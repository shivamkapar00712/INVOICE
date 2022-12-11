const router = require("express").Router();
const UserController = require("../controller/user.controller");
const user = new UserController();

router.post("/login", user.login);
router.post("/register", user.register);

module.exports = router;
