"use strict";

import { productList } from "../../mocks/productList.js";
import {
  parseErrorResponse,
  parseSuccessResponse,
} from "../../utils/helpers/index.js";

export const getProductsList = async (event) => {
  try {
    return parseSuccessResponse(productList);
  } catch {
    return parseErrorResponse(500);
  }
};
