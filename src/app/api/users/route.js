import { users } from "@/app/db/db";
import { NextResponse } from "next/server";

// export function GET() {
//     return NextResponse.json({ msg: "hello world" }, { status: 404 });
// }

// export const POST = (req, res) => {
//     return NextResponse.json({ msg: "hello world" }, { status: 200 });

// }

export const GET = () => {
    const data = users;
    return NextResponse.json({ data: data });
}