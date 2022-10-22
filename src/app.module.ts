import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import emailConfig from "./config/email.config";
import databaseConfig from "./config/database.config";
import authConfig from "./config/auth.config";
import {validationSchema} from "./config/config.validation";

const configs = [
  emailConfig,
  databaseConfig,
  authConfig
]

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [ ...configs],
      isGlobal: true,
      validationSchema
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
