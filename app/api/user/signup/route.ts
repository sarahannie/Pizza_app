import {connect} from '@/dbconfig/dbconfig';
import User from '@/models/userModel';
import {NextResponse, NextRequest} from 'next/server';
import bcryptjs from 'bcryptjs'
connect()

export async function POST(request: NextRequest) {
    
    try{
       const resBody = await request.json()
       const {email, password, confirmpassword} = resBody
       console.log(resBody)
    //    check if user already exists
       const user = await User.findOne({email})
       if(user){
        return NextResponse.json({ error: 'User already exists', status: 400 })
       }
    //  hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //  create user
      const newUser = new User({
           email,
           password:hashedPassword,
           confirmpassword
       })

     const savedUser =  await newUser.save()
     console.log(savedUser)

     return NextResponse.json(
        {message:'User created successfully',
            sucess:true,
         savedUser}, {status:200}
        )
    }catch(error:any){
        return NextResponse.json({error:error.message}, {status:500})
        console.log(error.message)

    }
}
