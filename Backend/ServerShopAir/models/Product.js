const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    pice: {
        type: Number, 
        required: true
    },
    imageProduct: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('products', ProductSchema)