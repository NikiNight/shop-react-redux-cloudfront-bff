import { productServiceSchema } from "../dataSources/schema.js";

export const getProductsQueryText = `SELECT * FROM ${productServiceSchema.products.table}`;
