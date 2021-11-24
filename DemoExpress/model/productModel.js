const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: {type: ObjectId},
    productName: { type: String },
    price: { type: Number },
    date: { type: Date },
    saleUpTo: { type: Number },
    detailsProduct: {type: String},
    idLoaiSP: { type: Schema.Types.ObjectId, ref: 'category' },
    imgProduct: { type: String }
    
})

module.exports = mongoose.model('product', productSchema)