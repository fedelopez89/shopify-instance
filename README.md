# Product Detail Project with Next.js and Shopify

This project focuses on displaying product details fetched from Shopify using Next.js for the front-end and React Query for data and cache management.

## Requirements

- Required to load a product detail page using a slug.
- The product is fetched from Shopify via their API.
- React Query should be used for efficient data and cache management.

## Features

- Uses Shopify's API to fetch product data.
- Converts product title into a slug to meet the requirement.
- Uses React Query for data and cache management, optimizing API calls.

## Implementation

### Getting product by slug:

Given that Shopify provides access to products by ID and the requirement is to use a slug, we've implemented a system where we fetch all products at first and then filter by title to find the desired product.

### Using React Query:

- In `ProductDetailPage`, we pre-fetch the product details using `prefetchQuery` and store these data in cache.
- We use `dehydrate` to extract the state (including cached data) from React Query and pass it to the client with `Hydrate`.

- In the `ProductDetail` component, we use `useQuery` to fetch the product details from the cache, avoiding additional API calls when possible.

### Styling and Components:

- Uses Chakra UI for styling components and efficiently displaying product information.
- Handles images with Next.js's `Image` component, including a replacement container in case the image isn't available.

## Future Improvements

1. Implement a system that allows directly fetching a product by slug from Shopify or some other optimization that reduces the need to fetch all products.
2. Solve all warnings and possible console errors.
3. Enhance user experience by adding additional features and optimizing page loading.

## Conclusion

This project demonstrates an efficient way of integrating Next.js with Shopify and making use of React Query for data and cache management. Although there are areas of improvement, it serves as a solid base for future expansions and optimizations.
