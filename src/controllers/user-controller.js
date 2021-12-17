const req = require("express/lib/request");
const db = require("../models");

async function getUsers(req, res, next) {
  try {
    const users = await db.User.find({})
      .select({ firstName: 1, lastName: 1 })
      .lean()
      .exec();

    res.status(200).send({ success: true, data: users });
  } catch (err) {
    next(err);
  }
}

// async function getSingleUser(req, res, next) {
//   const { userId } = req.params;

//   try {
//     const user = await db.User.findOne({ _id: userId })
//       .select({ firstName: 1 })
//       .lean()
//       .exec();

//     res.status(200).send({ success: true, data: user });
//   } catch (err) {
//     next(err);
//   }
// }

async function getSingleUser(req, res, next) {
  const { userId } = req.params;

  try {
    const user = await db.User.findOne({ _id: userId })
      .select({
        email: 1,
      })
      .lean()
      .exec();

    res.status(200).send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
}

async function createUser(req, res, next) {
  const { speaks, firstName, lastName, email, password } = req.body;

  try {
    const user = await db.User.create({
      speaks,
      firstName,
      lastName,
      email,
      password,
    });

    res.status(201).send({
      data: {
        _id: user._id,
      },
    });
  } catch (err) {
    next(err);
  }
}

async function updateUser(req, res, next) {
  const { userId } = req.params;

  const { newEmail } = req.body;

  try {
    const user = await db.User.findOneAndUpdate(
      { _id: userId },
      { $set: { email: newEmail } },
      { new: true },
    )
      .lean()
      .exec();

    res.status(200).send({ data: user });
  } catch (err) {
    next(err);
  }
}

async function deleteUser(req, res, next) {
  const { userId } = req.params;

  try {
    const user = await db.User.findOneAndDelete({ _id: userId });

    res.status(200).send({ data: userId });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getUsers: getUsers,
  getSingleUser: getSingleUser,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
