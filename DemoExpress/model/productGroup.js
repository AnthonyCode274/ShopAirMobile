const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productGroupSchema = new Schema({
    productGroupId: {type: ObjectId},
    productGroupName: { type: String },
    createdDate: { type: Date },
    createdBy: { type: Schema.Types.ObjectId, ref: 'shopOwnerId' },
    updatedDate: { type: Date },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'shopOwnerId' },
    productId: { type: Schema.Types.ObjectId, ref: 'productId' },
    shopOwnerId: { type: Schema.Types.ObjectId, ref: 'shopOwnerId' },
    categoryId: { type: Schema.Types.ObjectId, ref: 'categoryId' },
    flastSaleId: { type: Schema.Types.ObjectId, ref: 'flastSaleId' },
    bannerId: { type: Schema.Types.ObjectId, ref: 'bannerId' },
})

module.exports = mongoose.model('productGroup', productGroupSchema)