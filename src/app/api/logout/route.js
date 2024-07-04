import { NextResponse } from 'next/server'

export async function POST() {
    const response = NextResponse.json({ message: 'Logout successful' })
    response.cookies.set('token', '', { expires: new Date(0) }) // Clear the token cookie
    return response
}