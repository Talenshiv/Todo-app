export class Todo {
  constructor(
    public id: number,
    public text: string,
    public completed: boolean = false
  ) {
    // тут в неявном виде происходит такая херня
    // this.id = id;
    // this.text = text;
    // this.completed = completed;
  }
}
