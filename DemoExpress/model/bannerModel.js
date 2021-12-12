const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bannerSchema = new Schema({
    bannerId: {type: ObjectId},
    bannerName: { type: String },
    bannerImage: { type: String },
    productId: { type: Schema.Types.ObjectId, ref: 'productId' },
    sortedNumber: { type: Number },
    bannerDetails: { type: String },
    productGroupId: { type: Schema.Types.ObjectId, ref: 'productGroupId' },
    bannerList: { type: Array },
    productInputType: { type: Number },
})

module.exports = mongoose.model('banner', bannerSchema)