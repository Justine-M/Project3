const router = require("express").Router();
const eventController = require("../../controllers/event-controller");


router.route("/")
  .get(eventController.findAll)
  .post(eventController.create);

// Matches with "/api/event/:id"
router
  .route("/:id")
  .get(eventController.findById)
  .put(eventController.update)
  .delete(eventController.remove);

module.exports = router;















// // Define API routes here

// app.get("/guests", (req, res) => {
//   axios
//     .get("/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });
