import {connect} from '@/dbconfig/dbconfig';
import Product from '@/models/product';
import mongoose from 'mongoose';
connect()



export async function GET(req, res) {
  try {
   const url = new URL(req.url);
   const _id = url.pathname.split('/').pop();
    if (!_id) {
      return Response.json({ error: 'Product ID is missing in the request', status: 400 });
    }
    const product = await Product.findById(_id);
    if (!product) {
      return Response.json({ error: 'Product not found', status: 404 });
    }
    return Response.json(product);
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Internal Server Error', status: 500 });
  }
}


export async function PUT(req) {
  try {
    const data = await req.json();
    const { _id, title, description, price, extras, image, ...otherProductInfo } = data;

    let filter = {};
    if (_id) {
      filter = { _id };
    } else {
      // Handle the case when _id is not provided
      return Response.json({ error: 'Product ID is required', status: 400 });
    }

    const product = await Product.findOne(filter);

    if (!product) {
      return Response.json({ error: 'Product not found', status: 404 });
    }

    // Update product information
    await Product.updateOne(filter, { title, description, price, extras, image, ...otherProductInfo });

    console.log('Product updated successfully:', product);

    return Response.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    return Response.json({ error: 'Internal Server Error', status: 500 });
  }
}


export async function DELETE(req) {
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  await Product.deleteOne({_id});
  return Response.json(true);
}




  