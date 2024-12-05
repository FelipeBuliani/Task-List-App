import { Task } from './../../interfaces/task.interface';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(public taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    this.router.navigate(['/task-create']);
  }

  toggleCompletion(taskId: string) {
    this.taskService.toggleTaskCompletion(taskId);
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId);
  }
}
