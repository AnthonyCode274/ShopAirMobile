const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const statisticsTableSchema = new Schema({
    statisticsTableId: { type: ObjectId },
    statisticsTableName: { type: String },
    monthlyTotalAmount: { type: Number },
    startedDate: { type: Date },
    toDate: { type: Date },
    shopOwnerId: { type: Schema.Types.ObjectId, ref: 'shopOwnerId' },
    productId: { type: Schema.Types.ObjectId, ref: 'productId' },
});

module.exports = mongoose.model('statisticsTable', statisticsTableSchema)