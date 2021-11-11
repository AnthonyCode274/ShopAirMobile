const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: {type: ObjectId},
    productName: { type: String },
    price: { type: Number },
    date: { type: Date },
    saleUpTo: { type: Number },
<<<<<<< HEAD:DemoExpress/model/productModel.js
    desProduct: { type: String },
=======
    detailsProduct: {type: String},
>>>>>>> dab610226ab4dab8510f4a4975d9688bf89c0f77:Backend/DemoExpress2_ps13181_hbs/model/productModel.js
    idLoaiSP: { type: Schema.Types.ObjectId, ref: 'Category' },
    imgProduct: { type: String }
    
})

module.exports = mongoose.model('Product', productSchema)