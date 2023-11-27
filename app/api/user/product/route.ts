import {connect} from '@/dbconfig/dbconfig';
import Product from '@/models/product';
import {NextResponse, NextRequest} from 'next/server';

connect()

export async function GET(request: NextRequest) {
    try{
        const products = await Product.find({})
        if(!products){
            return NextResponse.json({error: 'No products found'}, {status: 404})
        }
        return NextResponse.json(products, {status: 200})
    }catch(error:any){
        console.log(error.message)
        return NextResponse.json({error:error.message}, {status:500})
        
    }
}

export async function POST(request: NextRequest) {
    try {
      const product = await request.json();
      if (!product) {
        return NextResponse.json({ error: 'No product found' }, { status: 404 });
      }
      const newProduct = new Product(product);
      const savedProduct = await newProduct.save();
      return NextResponse.json(savedProduct, { status: 200 });
    } catch (error: any) {
      console.log(error.message); 
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  export async function PUT(request: NextRequest) {
    try {
      const product = await request.json();
      if (!product || !product._id) {
        return NextResponse.json({ error: 'Invalid product data' }, { status: 400 });
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        product._id,
        product,
        { new: true }
      );

      if (!updatedProduct) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }

      return NextResponse.json(updatedProduct, { status: 200 });
    } catch (error: any) {
      console.log(error.message); 
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }


  export async function DELETE(request: NextRequest) {
    try {
      const { _id }:any = request.body;
  
      if (!_id) {
        return NextResponse.json({ error: 'Invalid product data' }, { status: 400 });
      }
  
      const deletedProduct = await Product.findByIdAndDelete(_id);
  
      if (!deletedProduct) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
  
      return NextResponse.json(deletedProduct);
    } catch (error: any) {
      console.log(error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  