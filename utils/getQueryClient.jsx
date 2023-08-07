/* import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;

 */import { QueryClient } from "@tanstack/react-query";

export default function getQueryClient() {
  return new QueryClient();
}
