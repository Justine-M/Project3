const router = require("express").Router();
const booksController = require("../../controllers/guest-ontroller");


router.route("/")
  .get(guest-controller.findAll)
  .post(guest-ontroller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(guest-controller.findById)
  .put(guest-controller.update)
  .delete(guest-controller.remove);

module.exports = router;