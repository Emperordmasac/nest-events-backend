import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppYorubaService {
  constructor(
    @Inject('APP_NAME')
    private readonly name: string,
    @Inject('MESSAGE')
    private readonly message: string,
  ) {}

  getHello(): string {
    console.log(process.env.DB_HOST);
    return `Eku Ojumo oo FROM ${this.name}, ${this.message}`;
  }
}
