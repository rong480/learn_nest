import { Module } from '@nestjs/common';
import { AppController } from './utils/controllers/app.controller';
import { CatsController } from './utils/controllers/cat.controller';
import { AppService } from './utils/controllers/app.service';

@Module({
  imports: [],
  controllers: [AppController,CatsController],
  providers: [AppService],
})
export class AppModule {}
