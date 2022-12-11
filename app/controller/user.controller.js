const { User } = require("../model/User.model");
const hasher = require("../helper/bcrypt");

class UserController {
  login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(404).send({ error: true, message: "No data Found" });

    try {
      const decode = hasher.compare(req.body.password, user.password);
      if (!decode)
        return res
          .status(401)
          .send({ error: true, message: "Wrong credentials" });

      const token = user.generateToken();
      res.send({ token });
    } catch (ex) {
      return res.status(400).send({ error: true, message: ex.message });
    }
  };
  register = async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
    });
    try {
      const salt = await hasher.createSalt(10);
      const hash = await hasher.hash({ data: req.body.password, salt });

      user.password = hash;
      await user.save();
      return res
        .status(201)
        .send({ error: false, message: "Successfully Registered" });
    } catch (ex) {
      return res.status(400).send({ error: true, message: ex.message });
    }
  };
}

module.exports = UserController;
