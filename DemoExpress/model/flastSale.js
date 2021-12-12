const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const flastSaleSchema = new Schema({
    flastSaleId: {type: ObjectId},
    flastSaleTitle: { type: String },
    startedDate: { type: Date },
    endDate: { type: Date },
    productGroupId: { type: Schema.Types.ObjectId, ref: 'productGroupId' },
    productId: { type: Schema.Types.ObjectId, ref: 'productId' },
    saleUpTo: { type: Number },
    productInputType: { type: Number },
})

module.exports = mongoose.model('flastSale', flastSaleSchema)