const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middleware/auth");
const itemsController = require("../controllers/itemsController");

router.post("/", authenticateJWT, itemsController.createItem);
router.get("/", authenticateJWT, itemsController.getAllItems);
router.get("/:id", authenticateJWT, itemsController.getItemById);
router.put("/:id", authenticateJWT, itemsController.updateItem);
router.delete("/:id", authenticateJWT, itemsController.deleteItem);

module.exports = router;
