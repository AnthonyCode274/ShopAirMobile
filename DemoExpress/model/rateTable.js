const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const rateTableSchema = new Schema({
    rateId: {type: ObjectId},
    rateNumber: { type: Number },
    productId: { type: Schema.Types.ObjectId, ref: 'productId' },
    isFavorite: { type: Boolean },
    userId: { type: Schema.Types.ObjectId, ref: 'userId' },
})

module.exports = mongoose.model('rateTable', rateTableSchema)