const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    cateId: {
        type: Schema.Types.ObjectId,
        required: true, // Ràng buộc (bắt buộc phải có name)
        unique: true, // name phải khác nhau
    },
    nameType: {
        type: String,
        required: true, // Ràng buộc (bắt buộc phải có name)
        unique: true, // name phải khác nhau
    },
    imageDefault: {
        type: String,
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId, 
        ref: 'product'
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('category', CategorySchema)