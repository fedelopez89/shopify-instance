import { NextResponse } from "next/server";

export const GET = async (_, { params }) => {
    const productID = params.id;
    const response = await fetch(
        `https://${process.env.SHOPNAME}.myshopify.com/admin/api/2023-07/products/${productID}.json`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": process.env.ACCESS_TOKEN,
            },
        }
    );
    const data = await response.json();
    return NextResponse.json({ product: data?.product });
};
