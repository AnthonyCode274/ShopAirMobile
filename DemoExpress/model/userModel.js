const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    userId: { type: ObjectId },
    username: { type: String },
    phone: {type: Number},
    email: {type: String },
    password: { type: String },
    address: {type: String},
    avatar: {type: String},
});

module.exports = mongoose.model('user', userSchema)