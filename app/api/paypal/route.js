import Order from "@/models/Order"
import {connect} from '@/dbconfig/dbconfig';
import { NextResponse } from "next/server";
import uniqid from 'uniqid';

connect()

export async function POST (req){
    try{
        const resBody = await req.json()
        const{orderID, totalAmount, billingDetails,  purchases} = resBody
    
        const order = new Order({
        orderId: orderID || uniqid(),
        quantity: billingDetails.quantity || 1,
        address: billingDetails?.address?.country_code || '',
        phone: billingDetails?.phone_number?.national_number || 0,
        email: billingDetails.email_address || '',
        payeeId: billingDetails.payer_id || '',
        totalPrice: totalAmount || 0,
        name: billingDetails?.name?.given_name && billingDetails?.name?.surname || '',
        purchase: purchases.map((item)=>({
            amount: item?.amount?.value || 0,
            address: item?.shipping?.name?.full_name || '',
            name: item?.shipping?.address?.address_line_1 || ''
        })) 
        })

        const savedOrder = await order.save();
        if (!savedOrder) {
            return NextResponse.json({ error: 'Order does not exist', status: 400 });
          }
        return NextResponse.json({
            message:'Order created successfully',
            sucess:true, 
            savedOrder}, 
            {status:200})

    }catch(error){
        return NextResponse.json({error:error.message},{status:500})
    }

}

