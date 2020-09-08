const DEFAULT_TITLE = 'TODO';
const statusCounts = 3;
class Todo {
  constructor() {
    this.heading = DEFAULT_TITLE;
    this.items = [];
    this.currentId = 0;
  }

  getHeading() {
    return this.heading;
  }

  getAllItems() {
    return [...this.items];
  }

  clearItems() {
    this.items = [];
  }

  resetHeading() {
    this.heading = DEFAULT_TITLE;
  }

  editHeading(heading) {
    this.heading = heading;
  }

  addItem(title) {
    this.items.push({ title, status: 0, id: this.currentId++ });
  }

  findItem(id) {
    return this.items.find(item => item.id === id);
  }

  deleteItem(id) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  }

  changeStatus(id) {
    const item = this.findItem(id);
    item.status = (item.status + 1) % statusCounts;
  }
}

module.exports = Todo;
