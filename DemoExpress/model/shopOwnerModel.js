const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const shopOwnerSchema = new Schema({
    shopOwnerId: {type: ObjectId},
    shopOwnerName: { type: String },
    phone: {type: Number},
    email: {type: String },
    statisticsId: { type: Schema.Types.ObjectId, ref: 'statisticsId' },
    password: { type: String },
    address: {type: String},
    avatar: {type: String},
})

module.exports = mongoose.model('shopOwner', shopOwnerSchema)