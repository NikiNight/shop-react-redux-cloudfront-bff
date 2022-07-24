import { getProductsQueryText } from "../queries/productService.js";

export class ProductDataSource {
  constructor(client) {
    this.client = client;
  }

  async getProducts() {
    const query = {
      text: getProductsQueryText,
    };

    const result = await this.client.query(query);
    return result.rows ? result.rows : null;
  }
  // async getProductById(id: string): Promise<ProductInterface> {
  //
  //     const query = {
  //         text: `SELECT * FROM ${this.tableName} WHERE id = $1`,
  //         values: [id],
  //     } as QueryConfig;
  //
  //     const result = await  this.databaseClient.query(query);
  //     return result.rows[0] ? result.rows[0] : null;
  // }
  // async create(product: Pick<ProductInterface, 'title' | 'description' | 'price' | 'logo' | 'count'>) {
  //     const query = {
  //         text: `INSERT INTO ${this.tableName}(title, description, price, logo, count) VALUES($1, $2, $3, $4, $5) RETURNING *`,
  //         values: [product.title, product.description, product.price, product.logo, product.count],
  //     };
  //     const result = await this.databaseClient.query(query);
  //     return result.rows[0] ? result.rows[0] : null;
  // }
}
