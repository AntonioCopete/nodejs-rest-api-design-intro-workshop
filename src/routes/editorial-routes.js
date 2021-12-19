const Router = require("express").Router;

const editorialController = require("../controllers/editorial-controller");

const EditorialRouter = Router();

EditorialRouter.get("/", editorialController.getEditorials);

EditorialRouter.get("/:editorialId", editorialController.getEditorial);

EditorialRouter.post("/", editorialController.createEditorial);

EditorialRouter.delete("/:editorialId", editorialController.deleteEditorial);

module.exports = EditorialRouter;
