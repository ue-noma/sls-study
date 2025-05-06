import config from "./BffConfig";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Lambda using esbuild!',
      define: `Hello from ${config.retachConfig.name}`,
    }),
  };
};
