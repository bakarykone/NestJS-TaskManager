import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticTaskModule } from './static-task/static-task.module';
import { DynamicTaskModule } from './dynamic-task/dynamic-task.module';



@Module({
  imports: [StaticTaskModule, DynamicTaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
