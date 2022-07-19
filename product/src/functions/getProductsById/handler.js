"use strict";

import { productList } from "../../mocks/productList.js";
import {
  parseSuccessResponse,
  parseErrorResponse,
} from "../../utils/helpers/index.js";

export const getProductsById = async (event) => {
  const { productId } = event.pathParameters;
  try {
    const product = productId && productList.find((el) => el.id === productId);

    if (product) {
      return parseSuccessResponse(product);
    } else {
      return parseErrorResponse(404);
    }
  } catch {
    return parseErrorResponse(500);
  }
};
