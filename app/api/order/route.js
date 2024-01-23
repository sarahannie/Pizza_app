import Order from "@/models/Order"
import {connect} from '@/dbconfig/dbconfig';
import { NextResponse } from "next/server";

connect()

export async function POST (req){
    try{
        const resBody = req.json()
        const{...data} = resBody
        console.log(resBody)

        const order = new Order({
            ...data
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