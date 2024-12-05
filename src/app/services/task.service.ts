import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  getTasks() {
    return this.tasks;
  }

  addTask(title: string) {
    const newTask = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    this.saveToLocalStorage();
  }

  toggleTaskCompletion(taskId: string) {
    const task = this.tasks.find(t => t.id === taskId);

    if (task) {
      task.completed = !task.completed;
      this.saveToLocalStorage();
    }
  }

  deleteTask(taskId: string) {
    const index = this.tasks.findIndex(task => task.id === taskId);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }

    this.saveToLocalStorage();
  }

  clearTasks(){
    this.tasks = [];
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
