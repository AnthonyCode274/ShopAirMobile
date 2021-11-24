const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bannerSchema = new Schema({
    id: {type: ObjectId},
    bannerName: { type: String },
    idLoaiSP: { type: Schema.Types.ObjectId, ref: 'category' },
    imageUrl: { type: String },
    createdDate: { type: Date }
})

module.exports = mongoose.model('banner', bannerSchema)