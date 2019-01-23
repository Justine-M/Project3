const router = require("express").Router();
const guestRoutes = require("./guest");
const eventRoutes = require("./event");

// guest routes
router.use("/guest", guestRoutes);
router.use("/event", eventRoutes);

module.exports = router;