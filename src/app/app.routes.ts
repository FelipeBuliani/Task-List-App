import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'task-create', component: TaskCreateComponent },
];
