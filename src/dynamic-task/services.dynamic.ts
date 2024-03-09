import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicTaskService {
    private tasks: string[] = [];

    getTasks(): string[] {
        return this.tasks;
    }

    addTask(task: string): void {
        this.tasks.push(task);
    }
}