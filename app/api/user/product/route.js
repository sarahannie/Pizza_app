import {connect} from '@/dbconfig/dbconfig';
import Product from '@/models/product';
connect()






export async function POST(req) {
  try {
    
    const data = await req.json();
    const menuItemDoc = await Product.create(data);
    return new Response(JSON.stringify(menuItemDoc), { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
  
}




export async function PUT(req) {
  const {_id, ...data} = await req.json();
  await Product.findByIdAndUpdate(_id, data);
  return Response.json(true);
}

export async function GET() {
  
  return Response.json(
    await Product.find()
  );
}

export async function DELETE(req) {
  
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  await Product.deleteOne({_id});
  return Response.json(true);
}
















  