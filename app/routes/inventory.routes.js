const router = require("express").Router();
const InventoryController = require("../controller/inventory.controller");
const auth = require("../middleware/auth");
const inventory = new InventoryController();

router.post("/create", auth, inventory.create);
router.get("/", auth, inventory.showAllItemsOfInventory);

module.exports = router;
