import Order from "@/models/Order"
import {connect} from '@/dbconfig/dbconfig';
import { NextResponse } from "next/server";

connect()

export async function POST (req){
    try{
        const resBody = await req.json()
        const menuItem = await Order.create(resBody)
        return new Response(JSON.stringify(menuItem), {status:200})

    }catch(error){
        return NextResponse.json({error:error.message},{status:500})
    }

}