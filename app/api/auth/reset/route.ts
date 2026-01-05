import bcrypt from "bcryptjs";
import connectdb from "@/lib/connectdb";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await connectdb();

    const { token, password } = await req.json();

    const user = await User.findOne({
        passwordResetToken: token,
        passwordResetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
        return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);
    user.password = hashed;
    user.passwordResetToken = null;
    user.passwordResetTokenExpiry = null;
    await user.save();

    return NextResponse.json({ message: "Password updated successfully" }, { status: 200 });
}
