import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function GET(req) {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
        return NextResponse.json({ message: 'error' });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        return NextResponse.json({
            success: true,
            data: user
        });
    } catch (err) {
        return NextResponse.json({ message: 'Invalid token', error: err.message });
    }
}
