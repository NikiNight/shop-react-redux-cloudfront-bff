export const parseSuccessResponse = (response) => {
  return {
    statusCode: response ? 200 : 204,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(response),
  };
};
