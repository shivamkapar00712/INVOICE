const { default: mongoose } = require("mongoose");
const { Inventory } = require("../model/Invertory.model");
const { Product } = require("../model/Product.model");

class InventoryController {
  create = async (req, res) => {
    const product = new Product({
      name: req.body.name,
      buyPrice: req.body.buyPrice,
      gst: req.body.gst,
      profit: req.body.profit,
      finalPrice: req.body.finalPrice,
    });
    const inventory = new Inventory({
      userId: req.user._id,
      productId: product._id,
      quantity: parseInt(req.body.quantity),
    });

    try {
      await product.save();
      await inventory.save();
    } catch (ex) {
      product.delete();
      inventory.delete();
      return res.status(400).send({ error: true, message: ex.message });
    }
  };
  showAllItemsOfInventory = async (req, res) => {
    try {
      const inventory = await Inventory.aggregate([
        {
          $match: {
            userId: req.user._id,
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "products",
          },
        },
        {
          $unwind: "$products",
        },
        {
          $group: {
            _id: "$userId",
            products: {
              $push: {
                details: "$products",
                quantity: "$quantity",
              },
            },
          },
        },
      ]);
      res.send({ error: false, data: inventory });
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
module.exports = InventoryController;
