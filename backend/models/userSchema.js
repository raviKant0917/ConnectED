const mongoose = require('mongoose');
const crypto = require('crypto');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "A user must have a name."],
    },
    email: {
        type: String,
        required: [true, "A user requires an email address."],
        unique:[true,'User already exists'],
        lowercase:true,
        validate:[function(eadd){
            return validator.isEmail(eadd) && eadd.split('@').length > 1 && eadd.split('@')[1]=='nith.ac.in';
        },'This email address is not valid']
    },
    phoneNumber: {
        type: String,
        maxLength: 10,
        required: [true, "A user must have a phone number"],
    },
    profileImage: {
        type: String,
        maxLength: 150,
        default:"user.png"
    },
    address: {
        type: String,
        maxLength: 150,
        required:[true,'A user must have an address']
    },
    productsRented: {
        type:[mongoose.Schema.ObjectId],
        ref:'Product'
    },
    productsSold: {
        type:[mongoose.Schema.ObjectId],
        ref:'Product'
    },
    productsBought: {
        type:[mongoose.Schema.ObjectId],
        ref:'Product'
    },
    productsRequested: {
        type:[String]
    },
    password:{
        type:String,
        required:[true,'An account requires a password'],
        minlength:8,
        select:false
    },
    confirmPassword:{
        type:String,
        required:[true,'An account needs to confirm password'],
        validate:[function(el){
            return el===this.password;
        },'Password and confirm Password do not match']
    },
    passwordChangedAt:Date,
    passwordResetToken: String,
    passwordResetTokenExpires : Date
});

// userSchema.pre(/^find/,function(next){
//     this.populate({
//         path:'productsRented',
//         select: '-__v'
//     }).populate({
//         path:'productsSold',
//         select: '-__v'
//     }).populate({
//         path:'productsBought',
//         select: '-__v'
//     }).populate({
//         path:'productsRequested',
//         select: '-__v'
//     });
//     next();
// })

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))    return next();

    this.password = await bcrypt.hash(this.password,12);
    this.confirmPassword = undefined;
    next();
});

userSchema.pre('save',function(next){
    if(!this.isModified('password') || this.isNew)  return next();

    this.passwordChangedAt = Date.now()-1000;
    next();
})

userSchema.methods.createPasswordResetToken = function(){
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
    
    this.passwordResetTokenExpires = Date.now() + 10*60*1000;
    return resetToken;
}

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
