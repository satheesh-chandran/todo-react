import React from 'react';

class TextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onKeyDown({ keyCode }) {
    if (keyCode === 13 && this.state.value !== '') {
      this.props.onSubmit(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <div className='text'>
        <input
          value={this.state.value}
          onChange={this.onChange}
          placeholder='Enter Title'
          onKeyDown={this.onKeyDown}
          autoFocus
        ></input>
      </div>
    );
  }
}

export default TextComponent;
