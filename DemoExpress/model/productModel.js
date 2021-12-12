const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    productId: {type: ObjectId},
    productName: { type: String },
    price: { type: Number },
    productImage: { type: String },
    categoryId: { type: Schema.Types.ObjectId, ref: 'categoryId' },
    createdDate: { type: Date },
    createdBy: { type: Schema.Types.ObjectId, ref: 'shopOwnerId' },
    updatedDate: { type: Date },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'shopOwnerId' },
    listImage: { type: Array },
    rateNumber: { type: Number },
    soldNumber: { type: Number },
    saleUpTo: { type: Number },
    productDetails: {type: String},
    productInputType: { type: Number },
    sortedNumber: { type: Number },
    favoriteId: { type: Schema.Types.ObjectId, ref: 'favoriteId' },
    flastSaleId: { type: Schema.Types.ObjectId, ref: 'flastSaleId' }
})

module.exports = mongoose.model('product', productSchema)