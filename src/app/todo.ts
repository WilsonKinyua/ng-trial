export class Todo {
  showTodoDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string
  ) {
    this.showTodoDescription = false;
  }
}
