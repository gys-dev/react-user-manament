const mongoose = require('../db')();
const Category = require('./category')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    body: String,
    slug: String,
    created_date: {type: Date, default: Date.now},
    update_date: {type: Date},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    thumbnail_image: String
});

module.exports = mongoose.model('Post', PostSchema);