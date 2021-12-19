const mongoose = require("mongoose");

const EditorialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  creationDate: {
    type: Date,
  },
  authors: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "user",
  },
  publishedBooks: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "book",
  },
});

const EditorialModel = new mongoose.model("editorial", EditorialSchema);

module.exports = EditorialModel;
