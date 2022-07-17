"use strict";

import { productList } from "../../mocks/productList.js";
export const getProductsList = async (event) => {
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(productList),
  };
};
