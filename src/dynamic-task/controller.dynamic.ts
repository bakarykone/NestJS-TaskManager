import { Controller, Get } from '@nestjs/common';
import { DynamicTaskService } from './services.dynamic';

@Controller('dynamic-task')
export class DynamicTaskController {
    constructor(private readonly dynamicTaskService: DynamicTaskService) {}

    @Get()
    getTasks(): string[] {
        return this.dynamicTaskService.getTasks();
    }
}