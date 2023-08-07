import { NextResponse } from "next/server";
import { convertTitleToHandle } from "../../../../lib/utils";

export const GET = async (_, { params }) => {
    const productTitle = params.id;
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
    const data = await response.json();
    const filterProductByTitle = data?.products?.find(
        (product) => convertTitleToHandle(product?.title) === productTitle
    );
    return NextResponse.json(filterProductByTitle);
};
