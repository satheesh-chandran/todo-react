import React from 'react';
import TextComponent from './TextComponent';
const DEFAULT_HEADING = 'TODO';
class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHeadingEditable: false, heading: DEFAULT_HEADING };
    this.reset = this.reset.bind(this);
    this.editHeading = this.editHeading.bind(this);
    this.makeHeadingEditable = this.makeHeadingEditable.bind(this);
  }

  reset() {
    this.setState({ heading: DEFAULT_HEADING });
    this.props.clearTasks();
  }

  makeHeadingEditable() {
    this.setState({ isHeadingEditable: true });
  }

  editHeading(heading) {
    this.setState({ heading, isHeadingEditable: false });
  }

  render() {
    if (this.state.isHeadingEditable)
      return (
        <TextComponent value={this.state.heading} onSubmit={this.editHeading} />
      );
    return (
      <h1>
        <span onClick={this.makeHeadingEditable}>{this.state.heading}</span>
        <span className='clear' onClick={this.reset}>
          X
        </span>
      </h1>
    );
  }
}

export default Heading;
