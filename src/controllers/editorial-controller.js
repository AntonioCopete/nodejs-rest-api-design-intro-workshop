const db = require("../models");

async function getEditorials(req, res, next) {
  try {
    const editorial = await db.Editorial.find({})
      .select({
        name: 1,
      })
      .lean()
      .exec();
    res.status(200).send({
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
      data: { _id: editorial._id },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { createEditorial, getEditorials };
