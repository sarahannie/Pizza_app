import Order from "@/models/Order"
import {connect} from '@/dbconfig/dbconfig';
import { NextResponse } from "next/server";
import uniqid from 'uniqid';

connect()

export async function POST (req){
    try{
        const resBody = await req.json()
        const orderId = uniqid()
      
        const menuItem = await Order.create({...resBody, orderId})
        return new Response(JSON.stringify(menuItem), {status:200})

    }catch(error){
        return NextResponse.json({error:error.message},{status:500})
    }

}

export async function GET(req) {
    try {
        const orderId = req.params?.orderId; 
        console.log("orderId", orderId)

        const order = await Order.findOne({ orderId });

        if (!order) {
            return new Response(JSON.stringify({ error: 'Order not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(order), { status: 200 });
    } catch (error) {
        console.error("Error fetching order:", error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}