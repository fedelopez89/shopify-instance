// Components
import ProductDetail from "../../../components/ProductDetail";
// react-query
import getQueryClient from "../../../utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../../../utils/HydrateClient";
// Utils
import { convertTitleToHandle } from "../../../lib/utils";

const getProductDetails = async (productTitle) => {
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
    (product) => convertTitleToHandle(product.title) === productTitle
  );
  return filterProductByTitle;
};

const ProductDetailPage = async ({ params }) => {
  const { product } = params;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([product], getProductDetails(product));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ProductDetail product={product} />
    </Hydrate>
  );
};

export default ProductDetailPage;
