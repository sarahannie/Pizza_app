import {connect} from '@/dbconfig/dbconfig';
import Product from '@/models/product';
import mongoose from 'mongoose';
connect()
// export async function GET(){
//     const {_id} = await req.json();
//     await Product.findById(_id);
//     return Response.json(true);
//   }

//   export async function GET(req, res) {
//     try {
//       const { _id } = await req.json();
      
//       // Assuming Product is a mongoose model
//       const product = await Product.findOne(_id);
  
//       if (!product) {
//         return Response.json({ error: 'Product not found', status: 404 })
//       }
  
//       // Assuming you want to send the found product as JSON response
//       return Response.json(product);
//     } catch (error) {
//       console.error(error);
//       return Response.json({ error: 'Internal Server Error', status: 501 })
      
//     }

    
//   }

export async function GET(req, res) {
    try {
     
      const url = new URL(req.url);
      console.log("url", url)
    //   const _id = url.searchParams.get('_id');
    const _id = url.pathname.split('/').pop();

    console.log('Full URL:', req.url);
    console.log('Requested _id:', _id);

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        console.error(`Invalid _id: ${_id}`);

        return Response.json({ error: 'Invalid _id in the request', status: 400})
      }
  
      // Convert _id to ObjectId
      const objectId = mongoose.Types.ObjectId(_id);
      console.log("objproduct", objectId)
    

      // Assuming Product is a mongoose model
      

      const product = await Product.findById(objectId);
  
      console.log('Found product:', product);
  
      if (!product) {
        return Response.json({ error: 'Product not found', status: 404 })
      }
  
      // Assuming you want to send the found product as JSON response
      return Response.json(product);
 
    } catch (error) {
      console.error(error);
      return Response.json({ error: 'Internal Server Error', status: 501 })
      
    }

  }
  