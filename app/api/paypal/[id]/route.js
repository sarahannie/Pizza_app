import Order from "@/models/Order"
import {connect} from '@/dbconfig/dbconfig';
connect()


export async function GET(req, res) {
    try {
     const url = new URL(req.url);
     const _id = url.pathname.split('/').pop();
      if (!_id) {
        return Response.json({ error: 'Order ID is missing in the request', status: 400 });
      }
      const order = await Order.findById(_id);
      if (!order) {
        return Response.json({ error: 'order not found', status: 404 });
      }
      return Response.json(order);
    } catch (error) {
      console.error(error);
      return Response.json({ error: 'Internal Server Error', status: 500 });
    }
  }