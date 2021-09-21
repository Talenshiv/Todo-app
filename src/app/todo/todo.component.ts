import {Component, OnInit} from '@angular/core';
import {DataService} from "../share/data.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo: any

  constructor(public dataService: DataService, public router: Router) {
  }

  ngOnInit(): void {
  }

  editTask(todoId: number): void {
    this.router.navigate(['todo', todoId]);
  }

  onDeleteTodo(todoId: number) {
    this.dataService.onDeleteTodo(todoId);
  }

  onTodoClicked(todoId: number, completed: boolean) {
    this.dataService.onTodoClicked(todoId);
    if (completed) {
      this.dataService.onTodoChangeUp(todoId);
    } else {
      this.dataService.onTodoChange(todoId);
    }
  }
}
