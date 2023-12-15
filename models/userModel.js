import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        // required: [true, 'Password is required'],
        
    },
    confirmpassword: {
        type: String,
        // required: [true, 'Password is required'],
     
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
},{timestamps: true},    )

const User = mongoose.models.users  || mongoose.model('users', userSchema);

export default User;