const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const favoriteSchema = new Schema({
    favoriteId: { type: ObjectId },
    userId: { type: String },
    productId: { type: String },
    isFavorite: { type: Boolean },
});

module.exports = mongoose.model('favorite', favoriteSchema)