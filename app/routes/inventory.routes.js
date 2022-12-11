const router = require("express").Router();
const InventoryController = require("../controller/inventory.controller");
const inventory = new InventoryController();

router.post("/create", inventory.create);
router.post("/", inventory.showAllItemsOfInventory);

module.exports = router;
