import React from 'react';
import TextComponent from './TextComponent';
import TodoText from './TodoText';

class TodoMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTodo = this.addTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(position) {
    const updatedList = this.state.tasks.slice();
    updatedList[position].isDone = !updatedList[position].isDone;
    this.setState({ tasks: updatedList });
  }

  addTodo(title) {
    this.setState({ tasks: this.state.tasks.concat({ isDone: false, title }) });
  }

  render() {
    const lines = this.state.tasks.map(({ isDone, title }, index) => {
      return (
        <TodoText
          key={index}
          title={title}
          isDone={isDone}
          id={index}
          changeStatus={this.changeStatus}
        />
      );
    });
    return (
      <div className='master'>
        <TextComponent onSubmit={this.addTodo} />
        <div className='list-container'>{lines}</div>
      </div>
    );
  }
}

export default TodoMaster;
