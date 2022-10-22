import {Inject, Injectable} from '@nestjs/common';
import emailConfig from "./config/email.config";
import {ConfigType} from "@nestjs/config";

@Injectable()
export class AppService {
  constructor(
      @Inject(emailConfig.KEY) private config: ConfigType<typeof emailConfig>
  ) {}

  getHello(): string {
    console.log(this.config.baseUrl)
    return 'Hello World!';
  }
}
