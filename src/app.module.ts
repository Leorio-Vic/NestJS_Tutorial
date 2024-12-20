import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CatsModule} from './cats/cats.module';
import {LoggerMiddleware} from './common/middlewares/logger.middleware';
import {AuthMiddleware} from './common/middlewares/auth.middleware';
import {CatsController} from './cats/cats.controller';
import {MongooseModule} from "@nestjs/mongoose";
import * as process from "node:process";

@Module({
  imports: [CatsModule, MongooseModule.forRoot('mongodb://localhost:27017/cats_db')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes(CatsController);

    consumer
      .apply(AuthMiddleware)
      .forRoutes({path: '*', method: RequestMethod.ALL});
  }
}
