// Components
import ProductDetail from "../../../../components/ProductDetail";
// react-query
import getQueryClient from "../../../../utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../../../../utils/HydrateClient";

const getProductDetails = async ({ id }) => {
  const response = await fetch(
    `https://${process.env.SHOPNAME}.myshopify.com/admin/api/2023-07/products/${id}.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.ACCESS_TOKEN,
      },
    }
  );
  const data = await response.json();
  return data?.product;
};

const ProductDetailPage = async ({ params }) => {
  const { id } = params;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([id], () => getProductDetails({ id }));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ProductDetail productId={id} />
    </Hydrate>
  );
};

export default ProductDetailPage;
