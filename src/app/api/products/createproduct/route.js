import { ProductstModel } from "@/model/product";

const { NextResponse } = require("next/server");

export const POST = async (req, res) => {
    const { name, price } = await req.json();
    // const newProduct = await new ProductstModel({
    //     name,
    //     price
    // }).save();

    const newProduct = new ProductstModel({
        name,
        price
    })
    await newProduct.save();


    // const newProduct = {
    //     name,
    //     price
    // }
    // await new ProductstModel(newProduct).save();

    return NextResponse.json("Product Successfully created")
}