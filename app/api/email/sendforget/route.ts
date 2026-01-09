import crypto from "crypto";
import connectdb from "@/lib/connectdb";
import { User } from "@/models/user";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: NextRequest) {
    await connectdb();
    const { email } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
        return Response.json({ message: "Email not found" }, { status: 404 });
    }

    const token = crypto.randomBytes(32).toString("hex");
    user.passwordResetToken = token;
    user.passwordResetTokenExpiry = Date.now() + 1000 * 60 * 10; // 10 mins
    await user.save();

    const resetLink = `<a href="${process.env.NEXT_PUBLIC_SITE_URL}/forgetPassword/reset?token=${token}">reset password</a>`;

    try {

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'yaser1999yaser@hotmail.com',
            subject: "reset password",
            html: `click here to reset your password ${resetLink}`,
            replyTo: email,
        });

        return Response.json({ message: "Reset email sent" });

    } catch (error) {

        console.log(error);
        return Response.json({ message: "Reset email did not sent" });

    }






}
