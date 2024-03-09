import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticTaskService {
    private tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];

    getTasks(): string[] {
        return this.tasks;
    }
}