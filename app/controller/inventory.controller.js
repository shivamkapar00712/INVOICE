const { default: mongoose } = require("mongoose");
const { Inventory } = require("../model/Invertory.model");
const { Product } = require("../model/Product.model");

class InventoryController {
  create = async (req, res) => {
    console.log("working");
    console.log(req.body);
    const product = new Product({
      name: req.body.name,
      buyPrice: parseInt(req.body.price),
      gst: parseInt(req.body.gst),
      profit: parseInt(req.body.profit),
      finalPrice: parseInt(req.body.finalPrice),
    });
    const inventory = new Inventory({
      userId: req.user._id,
      productId: product._id,
      quantity: parseInt(req.body.quantity),
    });

    try {
      await product.save();
      await inventory.save();
      res
        .status(201)
        .send({ message: "Successfully Product added to inventory" });
    } catch (ex) {
      product.delete();
      inventory.delete();
      return res.status(400).send({ error: true, message: ex.message });
    }
  };
  showAllItemsOfInventory = async (req, res) => {
    try {
      console.log(req.user);
      const inventory = await Inventory.aggregate([
        {
          $match: {
            userId: mongoose.Types.ObjectId(req.user._id),
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
      res.send({ error: false, data: inventory[0] });
    } catch (ex) {
      return res.status(400).send({ error: true, message: ex.message });
    }
  };
  // deleteItem = async (req,res) =>{
  //   const item = await Inventory.findById();
  // }
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
