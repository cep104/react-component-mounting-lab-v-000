import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  };
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
    //set the interval as a variable, and use setInterval to call the clockTick function and give it a time of 1000
    //look at the readme for this lab for these instructions
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    //use the function clearInterval which will stop whatever you put in it. in this case it will be the variable we used in componentDidMount this.interval.
  }
  // add your code here

  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  //clock functions
  clockTick = () => {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
  };

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };
}

export default Timer;
