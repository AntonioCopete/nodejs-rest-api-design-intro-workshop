const db = require("../models");

async function getEditorials(req, res, next) {
  try {
    const editorial = await db.Editorial.find({})
      .select({
        name: 1,
      })
      .lean()
      .exec();
    res.status(201).send({
      succes: true,
      data: editorial,
    });
  } catch (err) {
    next(err);
  }
}

async function createEditorial(req, res, next) {
  const { name, creationDate, authors, publishedBooks } = req.body;

  try {
    const editorial = await db.Editorial.create({
      name,
      creationDate,
      authors,
      publishedBooks,
    });

    res.status(200).send({
      editorial: editorial,
    });
  } catch (err) {
    next(err);
  }
}

async function getEditorial(req, res, next) {
  const { editorialId } = req.params;

  try {
    const editorial = await db.Editorial.findOne({ _id: editorialId })
      .select({ name: 1 })
      .lean()
      .exec();

    res.status(200).send({
      success: true,
      data: editorial,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteEditorial(req, res, next) {
  const { editorialId } = req.params;

  try {
    const editorial = await db.Editorial.findOneAndDelete({ _id: editorialId });

    res.status(200).send({ data: editorialId });
  } catch (err) {
    next(err);
  }
}

// async function updateEditorial(req, res, next) {
//   const { editorialId } = req.params;
// }

module.exports = {
  createEditorial,
  getEditorials,
  getEditorial,
  deleteEditorial,
};
