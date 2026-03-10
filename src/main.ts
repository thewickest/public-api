import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@codegenie/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

let server: Handler;
async function bootstrap(){
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)

  if (configService.hasMissingVars()) {
    throw new Error(`Missing environment variables: [${configService.getMissingVars()}]`)
  }

  if(process.env.NODE_ENV === 'offline') {
    await app.listen(3000);
  } else {
    await app.init()
    const expressApp = app.getHttpAdapter().getInstance();
    return serverlessExpress({ app: expressApp });
  }
}
export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};

bootstrap();