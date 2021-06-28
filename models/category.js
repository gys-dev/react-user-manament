const mongoose = require('../db')();
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
   name: String,
   parrent_category: {type: Schema.Types.ObjectId},
   created_date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Category', CategorySchema);