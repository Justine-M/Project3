const router = require("express").Router();
const bookRoutes = require("./guest");

// Book routes
router.use("/books", GuestRoutes);

module.exports = router;