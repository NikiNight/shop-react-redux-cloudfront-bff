import { getProductsList } from "./handler.js";

test("handler should return ok if find item", async () => {
  const { statusCode } = await getProductsList();
  expect(statusCode).toBe(200);
});
