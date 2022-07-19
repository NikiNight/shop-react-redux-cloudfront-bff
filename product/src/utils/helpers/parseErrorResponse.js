import { errorCodes } from "../constants/errorCodes.js";

export const parseErrorResponse = (code) => {
  return {
    statusCode: code,
    headers: { "Access-Control-Allow-Origin": "*" },
    message: errorCodes[code] || errorCodes["500"],
  };
};
