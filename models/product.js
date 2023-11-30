import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],   
    },
    price: {
        small: {
          type: Number,
          required: [true, 'Price is required for small pizza']
        },
        medium: {
          type: Number,
          required: [true, 'Price is required for medium pizza']
        },
        large: {
          type: Number,
          required: [true, 'Price is required for large pizza']
        },
      },
      extras: [
        {
          item: {
            type: String,
            
          },
          price: {
            type: Number,
           
          },
        },
      ],
Image: {
        type: String,
        // required: [true, 'Image is required'],
        
    }
})

const Product = mongoose.models.product || mongoose.model('product', productSchema);

export default Product;