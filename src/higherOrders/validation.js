import React from 'react';

const validated = function (Component, validator) {
  return props => {
    const onChange = text => validator(text) && props.changeText(text);
    return <Component onChange={onChange} />;
  };
};

const withValidation = function (Component, validator) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.changeText = this.changeText.bind(this);
    }

    changeText(text) {
      validator(text) && this.props.changeText(text);
    }

    render() {
      return <Component onChange={this.changeText} />;
    }
  };
};

export default validated;
