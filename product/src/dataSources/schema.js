export const productServiceSchema = {
  products: {
    table: "products",
    fields: ["id", "title", "description", "price"],
  },
  stocks: {
    table: "stocks",
    fields: ["product_id", "count"],
  },
};
