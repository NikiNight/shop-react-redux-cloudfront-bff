"use strict";

//import { productDataSource } from "../../dataSources/product.js";
import {
  parseErrorResponse,
  parseSuccessResponse,
} from "../../utils/helpers/index.js";

export const getProductsList = (service) => async (event) => {
  try {
    await service
      .getProducts()
      .then((res) => parseSuccessResponse(res))
      .catch((err) => parseErrorResponse(500));
  } catch {
    return parseErrorResponse(500);
  }
};
