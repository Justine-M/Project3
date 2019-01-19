const router = require("express").Router();
const guestRoutes = require("./invite");

// guest routes
router.use("/guests", GuestRoutes);

module.exports = router;