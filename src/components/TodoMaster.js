import React from 'react';
import TodoText from './TodoText';
import TextComponent from './TextComponent';

/* status = { 0: 'notDone', 1: 'progressing', 2: 'done' } */

const properties = [
  { color: 'red', decoration: 'none' },
  { color: 'orange', decoration: 'none' },
  { color: 'green', decoration: 'line-through' }
];

class TodoMaster extends React.Component {
  constructor(props) {
    super(props);
    this.properties = properties.slice();
    this.state = {
      tasks: [],
      heading: 'TODO',
      isHeadingEditable: false,
      currentId: 0
    };
    this.addTodo = this.addTodo.bind(this);
    this.editHeading = this.editHeading.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.makeHeadingEditable = this.makeHeadingEditable.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  removeTask(id) {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
  }

  makeHeadingEditable() {
    this.setState({ isHeadingEditable: true });
  }

  addTodo(title) {
    this.setState(({ currentId, tasks }) => {
      return {
        tasks: tasks.concat({ status: 0, title, id: currentId }),
        currentId: currentId + 1
      };
    });
  }

  editHeading(heading) {
    this.setState({ heading, isHeadingEditable: false });
  }

  changeStatus(id) {
    this.setState(state => {
      const position = state.tasks.findIndex(task => task.id === id);
      const updatedList = state.tasks.slice();
      const task = Object.assign({}, updatedList[position]);
      task.status = (task.status + 1) % this.properties.length;
      updatedList[position] = task;
      return { tasks: updatedList };
    });
  }

  getHeadingComponent() {
    if (!this.state.isHeadingEditable)
      return <h1 onClick={this.makeHeadingEditable}>{this.state.heading}</h1>;
    return (
      <TextComponent value={this.state.heading} onSubmit={this.editHeading} />
    );
  }

  render() {
    const texts = this.state.tasks.map(({ status, title, id }) => (
      <TodoText
        id={id}
        key={id}
        title={title}
        changeStatus={this.changeStatus}
        property={this.properties[status]}
        removeTask={this.removeTask}
      />
    ));

    return (
      <div className='master'>
        {this.getHeadingComponent()}
        <TextComponent onSubmit={this.addTodo} value='' />
        <div className='list-container'>{texts}</div>
      </div>
    );
  }
}

export default TodoMaster;
