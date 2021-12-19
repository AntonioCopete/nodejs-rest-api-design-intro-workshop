const Router = require("express").Router;

const editorialController = require("../controllers/editorial-controller");

const EditorialRouter = Router();

EditorialRouter.get("/", editorialController.getEditorials);

EditorialRouter.post("/", editorialController.createEditorial);

module.exports = EditorialRouter;
