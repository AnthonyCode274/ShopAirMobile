const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: { type: ObjectId },
    username: { type: String },
    email: {type: String},
    phoneNumber: {type: String},
    password: { type: String },
    avatar: {type: String},
    location: {type: String},
    idSP: { type: Schema.Types.ObjectId, ref: 'product' },
    productState: {type: String},
});

module.exports = mongoose.model('user', userSchema)