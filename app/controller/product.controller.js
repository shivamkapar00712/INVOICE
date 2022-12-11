const { Product } = require("../model/Product.model");

class ProductController {
  create = async (req, res) => {
    const product = new Product({
      name: req.body.name,
      price: parseInt(req.body.price),
    });

    try {
      await product.save();
    } catch (ex) {
      return res.status(400).send({ error: true, message: ex.message });
    }
  };
  showAll = async (req, res) => {
    try {
      const products = await Product.find();
      res.send({ error: false, data: products });
    } catch (ex) {
      return res.status(400).send({ error: true, message: ex.message });
    }
  };
  //   showForParticular = async (req, res) => {
  //     const product = await Product.find({});

  //     try {
  //       await product.save();
  //     } catch (ex) {
  //       return res.status(400).send({ error: true, message: ex.message });
  //     }
  //   };
}
module.exports = ProductController;
