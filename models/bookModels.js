const mongoose = require('mongoose');
const bookSchema = require('./bookSchema');



const bookModels = mongoose.model("Books-Library", bookSchema)

module.exports = bookModels