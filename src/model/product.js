import mongoose from 'mongoose';

const productModel = new mongoose.Schema({
    name: {
        type: "string",
    },
    price: {
        type: "number",
    }
}, {
    timestamps: true,
    versionKey: false,
});

export const ProductstModel = mongoose.models.products || mongoose.model("products", productModel);