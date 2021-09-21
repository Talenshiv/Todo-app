import {Injectable} from '@angular/core';
import {Todo} from "./todo.model";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = []

  constructor() {
  }

  gelAllTodos() {
    return this.todos;
  }

  getTodo(id: number) {
    const todos = this.todos.find(todo => todo.id === id);
    return todos;
  }

  addTodo(text: string) {
    // можно было бы искать последний айдишник во всем списке,
    // или затыкать промежуток, если ты например первый элемент удалил, но не суть
    const newTodo = new Todo(this.getNewId(), text, false); // что тут происходит?
    this.todos.push(newTodo);
  }

  changeTodo(id: number, text: string) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.text = text
    }
  }

  getNewId(): number {
    let sortedArray = [...this.todos]; // функция сорт отсортирует массив, но на не нужно сортировать наш основной
    // а так мы создаем его копию
    sortedArray.sort((a, b) => { // можешь посмотреть как работает функция сорт
      if (a.id > b.id) {
        return 1;
      } else if (a.id < b.id) {
        return -1;
      } else {
        return 0;
      }
    })
    // вот тут начинаем писать тот алгоритм
    let curInd = 1;
    for (let i = 0; i < sortedArray.length; i++, curInd++) { // перебор
      if (sortedArray[i].id !== curInd) {
        break;
      }

      // вот тут дополни алгоритм
      // если не понимаешь как работает for, прочитай
      // i++, curInd++ - эта част срабатывает в конце того что написано в теле цикла
      // i < sortedArray.length - это условие выхода из цикла
      // break - выход из цикла насильственно
      // давай
    }
    return curInd;
  }

  onDeleteTodo(todoId: number) {
    const index = this.todos.findIndex(todo => todo.id === todoId);
    this.todos.splice(index, 1);
    // тут ты удаляешь 1 элемент (deleteCount) начиная с элмента под номером todoId
    // следовательно если у тебя элементы [1,2,3], и ты удаляешь элемент с 1, у него id = 1, и ты удалешь элемент под
    // номером 1, а массив начинается с 0. Получится [1,3]
    // тебе надо найти индекс удаляемого элемента в массиве. гугли findIndex
  }

  onTodoClicked(todoId: number) {
    const index = this.todos.findIndex(todo => todo.id === todoId);
    this.todos[index].completed = !this.todos[index].completed;
  }

  onTodoChangeUp(todoId: number) {
    const index = this.todos.findIndex(todo => todo.id === todoId);
    const todo = this.todos[index];
    this.todos.splice(index, 1);

    const firstCompleted = this.todos.findIndex(todo => todo.completed);

    if (firstCompleted === -1) {
      this.todos.push(todo);
    } else {
      this.todos.splice(firstCompleted, 0, todo);
    }
  }

  onTodoChange(todoId: number) {
    const index = this.todos.findIndex(todo => todo.id === todoId);
    const todo = this.todos[index];
    this.todos.splice(index, 1);

    const firstCompleted = this.todos.findIndex(todo => todo.completed);

    if (firstCompleted === -1) {
      this.todos.push(todo);
    } else {
      this.todos.splice(firstCompleted, 0, todo);
    }
  }
}
