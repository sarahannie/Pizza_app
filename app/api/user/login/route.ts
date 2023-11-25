import {connect} from '@/dbconfig/dbconfig';
import User from '@/models/userModel';
import {NextResponse, NextRequest} from 'next/server';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
connect()


export async function POST(request: NextRequest) {
    try{
       const resBody = await request.json()
       const {email, password} = resBody
       console.log(resBody)

    //    check for user
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({ error: 'User does not exist', status: 400 })
        }

    //  check for password
        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({ error: 'Invalid password', status: 400 })
        }

    //  create Tokendata
        const tokenData = {
            email: user.email,
            id: user._id
        }

    //  create token
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
                expiresIn: '1d'
            })

        const response = NextResponse.json({
            message: 'Login successful',
            sucees: true
        })

        response.cookies.set('token', token, {
            httpOnly: true
        })

        return response
    
    }catch(error:any){
        return NextResponse.json({error:error.message}, {status:500})
        console.log(error.message)}
}


