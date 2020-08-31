import React from 'react';
import TextComponent from './TextComponent';
import TodoText from './TodoText';

/* status = { 0: 'notDone', 1: 'progressing', 2: 'done' } */

const properties = [
  { color: 'red', decoration: 'none' },
  { color: 'orange', decoration: 'none' },
  { color: 'green', decoration: 'line-through' }
];

class TodoMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], heading: 'TODO', isHeadingEditable: false };
    this.addTodo = this.addTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.properties = properties.slice();
    this.makeHeadingEditable = this.makeHeadingEditable.bind(this);
    this.editHeading = this.editHeading.bind(this);
  }

  makeHeadingEditable() {
    this.setState({ isHeadingEditable: true });
  }

  addTodo(title) {
    this.setState({ tasks: this.state.tasks.concat({ status: 0, title }) });
  }

  editHeading(heading) {
    this.setState({ heading, isHeadingEditable: false });
  }

  changeStatus(position) {
    this.setState(state => {
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
    const lines = this.state.tasks.map(({ status, title }, index) => (
      <TodoText
        id={index}
        key={index}
        title={title}
        changeStatus={this.changeStatus}
        property={this.properties[status]}
      />
    ));

    return (
      <div className='master'>
        {this.getHeadingComponent()}
        <TextComponent onSubmit={this.addTodo} />
        <div className='list-container'>{lines}</div>
      </div>
    );
  }
}

export default TodoMaster;
