/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ["cdn.shopify.com"],
    },
    env: {
        SHOPNAME: process.env.SHOPIFY_API_KEY,
        SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
    },
};
