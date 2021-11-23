const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cartSchema = new Schema({
    id: {type: ObjectId},
    quantity: { type: String },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Cart', cartSchema)