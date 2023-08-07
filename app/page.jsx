// Components
import ListProducts from "../components/ListProducts";
// react-query
import getQueryClient from "../utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../utils/HydrateClient";

const getListProductsClient = async () => {
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
  return data.products;
};

const ProductsPage = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["products"], getListProductsClient);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ListProducts />
    </Hydrate>
  );
};

export default ProductsPage;
