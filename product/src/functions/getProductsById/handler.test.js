import { getProductsById } from "./handler.js";

test("handler should return ok if find item", async () => {
  const { statusCode, body } = await getProductsById({
    pathParameters: { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa" },
  });
  expect(statusCode).toBe(200);
});

test("handler should return 404 if dont't find item", async () => {
  const { statusCode } = await getProductsById({
    pathParameters: { productId: "123" },
  });
  expect(statusCode).toBe(404);
});
