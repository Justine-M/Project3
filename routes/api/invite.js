const router = require("express").Router();
const guestController = require("../../controllers/guest-controller");


router.route("/")
  .get(guest-controller.findAll)
  .post(guest-ontroller.create);

// Matches with "/api/guest/:id"
router
  .route("/:id")
  .get(guest-controller.findById)
  .put(guest-controller.update)
  .delete(guest-controller.remove);

module.exports = router;