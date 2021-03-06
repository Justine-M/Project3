const router = require("express").Router();
const guestController = require("../../controllers/guest-controller");


router.route("/")
  .get(guestController.findAll)
  .post(guestController.create);

// Matches with "/api/guest/:id"
router
  .route("/:id")
  .get(guestController.findById)
  .put(guestController.update)
  .delete(guestController.remove);

module.exports = router;