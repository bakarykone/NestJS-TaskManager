import { Module } from '@nestjs/common';
import { StaticTaskController } from './controller.static';
import { StaticTaskService } from './services.static';
import { StaticTaskMiddleware } from './middleware.static';

@Module({
    controllers: [StaticTaskController],
    providers: [StaticTaskService, StaticTaskMiddleware],
})
export class StaticTaskModule {}