const bcrpyt = require("bcrypt");

const Bcrypt = {};

Bcrypt.createSalt = (rounds) => {
  return bcrpyt.genSalt(rounds);
};

Bcrypt.hash = async ({ data, salt }) => {
  return bcrpyt.hash(data, salt);
};

Bcrypt.compare = ({ data, hash }) => {
  return bcrpyt.compare(data, hash);
};

module.exports = Bcrypt;
