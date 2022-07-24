//import { getProductsById } from "./getProductsById/handler.js";
import { getProductsList as getProductsListHandler } from "./getProductsList/handler.js";
import pkg from "pg";
import { ProductDataSource } from "../dataSources/product.js";

const { Client } = pkg;
const client = new Client();
client.connect();
const service = new ProductDataSource(client);

//export const getProductById = getProductsById(service);
export const getProductsList = getProductsListHandler(service);
