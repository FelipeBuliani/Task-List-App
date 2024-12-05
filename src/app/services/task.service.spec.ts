import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('deve adicionar uma nova tarefa', () => {
    service.clearTasks();
    service.addTask('Tarefa 1');
    service.addTask('Tarefa 2');

    expect(service.getTasks().length).toBe(2);
  });

  it('deve alternar o status de conclusão da tarefa', () => {
    service.clearTasks();
    service.addTask('Tarefa 1');
    const task = service.getTasks()[0];

    service.toggleTaskCompletion(task.id);
    expect(task.completed).toBeTrue();

    service.toggleTaskCompletion(task.id);
    expect(task.completed).toBeFalse();
  });

  it('deve deletar uma tarefa', () => {
    service.clearTasks();
    service.addTask('Tarefa 1');
    const task = service.getTasks()[0];
    service.deleteTask(task.id);

    expect(service.getTasks().length).toBe(0);
  });

  it('deve limpar a lista de tarefas', () => {
    service.addTask('Tarefa 1');
    service.addTask('Tarefa 2');

    service.clearTasks();

    expect(service.getTasks().length).toBe(0);
  });
});
