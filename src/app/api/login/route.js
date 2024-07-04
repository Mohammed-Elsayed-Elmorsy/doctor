import { NextResponse } from "next/server";
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ConnectToMongo from "@/database/mongo";
import MyUser from "@/models/NewUser";

export async function POST(req) {
    try {
        await ConnectToMongo();
        const formData = await req.formData();
        const email = formData.get("email");
        const pass = formData.get("pass");
        if (email === '' || pass === '') {
            return NextResponse.json({
                success: false,
                message: 'Enter all data  , email , password'
            });
        }

        const existedEmail = await MyUser.findOne({ email: email });
        if (!existedEmail) {
            return NextResponse.json({
                success: false,
                message: 'Email does not exist'
            });
        }

        const passOk = await compare(pass, existedEmail.pass);
        if (passOk) {
            const token = jwt.sign(
                { id: existedEmail._id, image: existedEmail.image, email: existedEmail.email, firstName: existedEmail.firstName },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            const response = NextResponse.json({
                success: true,
                message: 'Login Successful',
                firstName: existedEmail.firstName,
                email: existedEmail.email,
                image: existedEmail.image
            });
            response.cookies.set('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60, // 1 hour
            });
            return response;
        } else {
            return NextResponse.json({
                success: false,
                message: 'Incorrect password'
            });
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Something went wrong! Please try again later'
        });
    }
}
