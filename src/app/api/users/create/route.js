
import { dirname } from 'path';
const appDir = path.resolve("./");
import fs from 'fs'
import { users } from "@/app/db/db";
import { NextResponse } from "next/server";
import path from 'path';


export const POST = async (req, res) => {
    try {
        // const { id, name, email } = await req.json();
        const { id, name, email } = await req?.body 
        console.log(req);

        // console.log(id, name, email );

        users.push({ id, name, email });
        const upArray = users
        const updateUsers = JSON.stringify(upArray, null, 2);
        console.log("my file path finding" + appDir);
        fs.writeFileSync(appDir + "/src/app/db/db.js", `export const users = ${updateUsers};`, 'utf8');
        return NextResponse.json({ ok: true, msg: "user created successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.error({ error: "Internal Server Error" });
    }
};

