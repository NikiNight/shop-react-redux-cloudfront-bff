"use strict";

import { productList } from "../../mocks/productList";
module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(productList),
  };
};
