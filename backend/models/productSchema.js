const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'A product must have a name']
    },
    description:{
        type:String,
        required:[true,'A product must have a description']
    },
    rent:Boolean,
    seller:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:[true,'A product must have a seller']
    },
    images:{
        type:[String],
        validate:[function(){
            return this.length !=0;
        },'A product requires at least one image']
    },
    duration:{
        type: Number,
        required: [function(){
            return this.rent;
        },'A renting product must have a duration']
    },
    price:{
        type:Number,
        required:[true,'A product needs price to be listed']
    }
});

// productSchema.pre(/^find/,function(next){
//     this.populate({
//         path:'seller',
//         select: 'name'
//     });
// })

const Product = mongoose.model('Product',productSchema);

module.exports = Product;
