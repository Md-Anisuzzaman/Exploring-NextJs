import { users } from "@/app/db/db";
import { NextResponse } from "next/server";

export const GET = async (_, res) => {
    const { id } = await res.params
    const user = users.filter((u) => u.id === id)
    // console.log(user);
    return NextResponse.json({ user })
}
export const POST = async (req, res) => {
    const { name, email } = await req.json();
    const id = res.params.id
    const user = users.find(user => user.id === id)
    console.log(user);
    if (user.name === name && user.email === email) {
        return NextResponse.json({ msg: "succesfully login" })
    }
    return NextResponse.json({ msg: "not login" })

}

