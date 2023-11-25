import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    items: [
        {
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    // totalPrice: {
    //     type: Number,
    //     required: true
    // }
})

const Cart = mongoose.models.cart || mongoose.model('cart', cartSchema);
export default Cart;

