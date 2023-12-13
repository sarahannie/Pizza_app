import {connect} from '@/dbconfig/dbconfig';
import Product from '@/models/product';
import {NextResponse, NextRequest} from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm, Fields, Files } from 'formidable';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { writeFile } from "fs/promises";
import { error } from 'console';
import upload from '@/utils/multer';



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



type MulterRequest = NextRequest & {
  file: any; // Add your file type here
};

// export async function POST(req: MulterRequest, res: NextResponse) {
//   upload.single('Image')(req, res, async(err:any) =>  {
//       if(err){
//           return NextResponse.json({error: err.message}, {status: 500})
//       }
      
//       try{
//           const product = await req.json();
//           const newProduct = new Product(product);
//           const imgUrl = process.env.DOMAIN + req.file.path.replaceAll(/\\/g, "/")
//           newProduct.Image = imgUrl
//           await newProduct.save();
//           return NextResponse.json(newProduct, {status: 201})
//       }catch(error:any){
//           console.log(error.message)
//           return NextResponse.json({error:error.message}, {status:500})
//       }
//   })
// }

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST( req: MulterRequest, res: NextResponse) {

  try{
      const product =  await req.json();
      const newProduct = new Product(product);
      await handleFileUpload(req);
      if (req.file) {
          const imgUrl = process.env.DOMAIN + req.file.path.replaceAll(/\\/g, "/")
          newProduct.Image = imgUrl
      }
      await newProduct.save();
      console.log(newProduct)
      return NextResponse.json(newProduct, {status: 201})
  }catch(error:any){
      console.log(error.message)
      return NextResponse.json({error:error.message}, {status:500}) 
  }
}

async function handleFileUpload(req: MulterRequest): Promise<void> {
  return new Promise((resolve, reject) => {
    upload.single('Image')(req, null, (err: any) => {
      if (err) {
        reject(new Error(err.message));
      } else {
        resolve();
      }
    });
  });
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
  