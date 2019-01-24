const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_list', (err)=>{
    console.log("-- connect to db");
    if(err) {
        console.log(err);
    }
});

const ProductSchema = new mongoose.Schema({
    title: {type:String, minlength:[4,"4 or more letters."]},
    price: {type:Number, required:[true,"Price required."]},
    url: {type:String}
}, {timestamps: true })

module.exports = mongoose.model('Product', ProductSchema);