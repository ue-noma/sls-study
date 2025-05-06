import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

declare const  SERVICE_NAME: string;

export const hello = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from root path!',
        serviceName: SERVICE_NAME,
      }
    )
  };
};