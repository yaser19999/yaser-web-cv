"use server";

import { signIn } from "@/auth";
import connectdb from "@/lib/connectdb";
import { User } from "@/models/user";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { signOut } from "@/auth";






async function register(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const re_enter = formData.get("Re-enter") as string;

    if (!name || !email || !password || !re_enter) redirect("/register?message=All fields are needed&type=error")


    if (password !== re_enter) redirect("/register?message=the password do not match&type=error")
    if (email !== "yaser1999yaser@hotmail.com") redirect("/register?message=Your email is not allowed &type=error")


    await connectdb()
    const user = await User.findOne({ email })
    if (user) redirect("/register?message=there a user with this email&type=error")

    const hashedPassword = await hash(password, 10)

    await User.create({
        name,
        email,
        password: hashedPassword,
    })

    redirect("/login?message=user created successfully&type=success")
}



async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
         await signIn("credentials", {
            email,
            password,
            redirect: false,
            callbackUrl: "/",
        });
    } catch (error:any) {
        console.log(error)
        redirect("/login?message=Something went wrong with your login&type=error")


    }





    redirect("/")





}




const logout = async () => {

    await signOut({ redirectTo: "/" });
}



const handleSubmit = async (data: FormData) => {
    const name = data.get('name') as string ?? ''
    const email = data.get('email') as string
    const message = data.get('text') as string ?? ''


    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/email/sendcontact`, {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

};





export { register, login, logout, handleSubmit }


