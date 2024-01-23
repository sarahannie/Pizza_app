import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    orderId: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    payeeId: {
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
    },
    purchase: [
        {
         
          amount: {
            type: String,
          },
          address: {
            type: String,
          },
          name: {
            type:String,
          }
        },
      ],
})

const Order = mongoose.models.order || mongoose.model('order', orderSchema);
export default Order;

