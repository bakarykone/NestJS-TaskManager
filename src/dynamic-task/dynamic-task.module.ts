import { Module } from '@nestjs/common';
import { DynamicTaskController } from './controller.dynamic';
import { DynamicTaskService } from './services.dynamic';
import { DynamicTaskMiddleware } from './middleware.dynamic';

@Module({
    controllers: [DynamicTaskController],
    providers: [DynamicTaskService, DynamicTaskMiddleware],
})
export class DynamicTaskModule {}