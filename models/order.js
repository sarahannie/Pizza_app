import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    orderId: {
        type: String,
    },
    quantity: {
        type: Number,
        default: 1
    },
    address: {
        type: String,
    },
    phone:{
        type: Number, 
    },
    totalPrice: {
        type: Number,    
    }
})

const Order = mongoose.models.order || mongoose.model('order', cartSchema);
export default Order;

