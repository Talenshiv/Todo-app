import { Component, OnInit } from '@angular/core';
import {DataService} from "../share/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Todo} from "../share/todo.model";
import { TodoComponent} from "../todo/todo.component";



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  todo!: Todo;
  text: any;
  addMode: boolean = false

  constructor(private dataService: DataService, private route: ActivatedRoute, public router: Router, private todoComponent: TodoComponent) {
    this.route.params.subscribe((params) => {
      const currentTodo = this.dataService.getTodo(+params.id);
      if (params.id === 'new') {
        this.addMode = true;
      } else {
        this.addMode = false;
      }
      if (currentTodo) {
        this.todo = currentTodo;
        this.text = currentTodo.text
      }
    });
  }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.text === '' || this.text === ' ') {
      alert('Введите задачу')
    } else {
      this.dataService.addTodo(this.text);
    }
  }

  changeText() {
    this.dataService.changeTodo(this.todo.id, this.text)
  }
}
