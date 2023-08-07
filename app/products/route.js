import { NextResponse } from "next/server";

export const GET = async () => {
    const response = await fetch(
        `https://${process.env.SHOPNAME}.myshopify.com/admin/api/2023-07/products.json`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": process.env.ACCESS_TOKEN,
            },
        }
    );
    const products = await response.json();
    return NextResponse.json({ data: products });
};
