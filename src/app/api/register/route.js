import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { hash } from 'bcryptjs';
import ConnectToMongo from "@/database/mongo";
import Joi from "joi";
import MyUser from "@/models/NewUser";

const registerSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    pass: Joi.string().required(),
    image: Joi.any(),
});

export async function POST(req) {
    try {
        await ConnectToMongo();
        const formData = await req.formData();
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const pass = formData.get("pass");
        const image = formData.get("image");

        const { error } = registerSchema.validate({ firstName, lastName, email, pass, image: image });
        if (error) {
            return NextResponse.json({ success: false, message: error.details[0].message }, { status: 400 });
        }

        if (firstName === '' || lastName === '' || email === '' || pass === '') {
            return NextResponse.json({
                success: false,
                message: 'Enter all data: First name, last name, email, and password'
            });
        }

        const existingUser = await MyUser.findOne({ email });
        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: 'Email already exists'
            });
        }

        const hashedPassword = await hash(pass, 10);
        if (!image) {
            return NextResponse.json({
                message: "No files received."
            },
                { status: 400 });
        }

        const buffer = Buffer.from(await image.arrayBuffer());
        const filename = Date.now() + image.name.replaceAll(" ", "_");
        const newPath = "/uploads/" + filename;
        try {
            await writeFile(
                path.join(process.cwd(), "public/uploads/" + filename),
                buffer
            );
        } catch (error) {
            console.log("Error occurred while writing the file: ", error);
            return NextResponse.json({ Message: "Failed to write file", status: 500 });
        }
        const newUser = await MyUser.create({
            firstName,
            lastName,
            email,
            pass: hashedPassword,
            image: newPath,
        });

        if (newUser) {
            return NextResponse.json({
                success: true,
                message: 'Registration successful',
                data: newUser
            });
        } else {
            return NextResponse.json({ success: false, message: 'Something went wrong while creating account' });
        }
    } catch (error) {
        console.log("Error occurred: ", error);
        return NextResponse.json({ success: false, message: 'Something went wrong! Please try again later' });
    }
}
