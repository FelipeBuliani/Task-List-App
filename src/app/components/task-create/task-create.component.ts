import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss'
})
export class TaskCreateComponent {
  newTaskTitle = '';

  constructor(private taskService: TaskService, private router: Router) {}

  addTask(form: NgForm) {
    if (form.valid) {
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
      form.resetForm();
      this.navigateBack();
    }
  }

  cancel(){
    this.navigateBack();
  }

  navigateBack(){
    this.router.navigate(['/tasks']);
  }
}
