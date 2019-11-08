import React, { Component } from 'react';
import ColorDisplay from '../components/colors/ColorDisplay';

export default class RandomColor extends Component {
  state = {
    backgroundColor: '',
    second: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.addSecond(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeColor() {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const index = Math.floor(Math.random() * colors.length);
    let color = colors[index];

    return color;
  }

  addSecond() {
    this.setState({
      second: new Date(),
      backgroundColor: this.changeColor()
    });
  }

  render() {
    return (
      <>
        <ColorDisplay backgroundColor={this.state.backgroundColor} />
      </>
    );
  }
}
