const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const categorySchema = new Schema({
    categoryId: { type: ObjectId },
    categoryName: { type: String },
    image: { type: String },
})

module.exports = mongoose.model('category', categorySchema)