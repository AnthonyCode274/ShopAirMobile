const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productInputTypeSchema = new Schema({
    productInputTypeSchemaId: {type: ObjectId},
    typeFlastSale: { type: Number },
    typeBannerSlide: { type: Number },
    typeFlastSale: { type: Number },
})

module.exports = mongoose.model('productInputType', productInputTypeSchema)