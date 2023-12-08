import { connection_link } from "@/config/myDb"
import { ProductstModel } from "@/model/product"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET = async() => {
    await mongoose.connect(connection_link)
    const products = await ProductstModel.find()
    return NextResponse.json({ "Products": products })
}