"use strict";

import { productList } from "../../mocks/productList";
module.exports.getProductsList = async (event) => {
  const { productId } = event.pathParameters;
  try {
    const product = productList.find((el) => el.id === productId);

    if (product) {
      return {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(product),
      };
    } else {
      return {
        statusCode: 404,
        headers: { "Access-Control-Allow-Origin": "*" },
        message: "Product not found",
      };
    }
  } catch {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      message: "Something went wrong",
    };
  }
};
