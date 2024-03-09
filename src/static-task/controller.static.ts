import { Controller, Get } from '@nestjs/common';
import { StaticTaskService } from './services.static';

@Controller('static-task')
export class StaticTaskController {
    constructor(private readonly staticTaskService: StaticTaskService) {}

    @Get()
    getTasks(): string[] {
        return this.staticTaskService.getTasks();
    }
}