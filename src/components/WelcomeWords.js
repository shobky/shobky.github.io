import React, { Component } from "react";
import { VscChevronDown } from "react-icons/vsc";
import Mario from "./Mario";
import "../styles/home.css";



class WelcomWords extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = this.props.textArray[this.state.textIdx % this.props.textArray.length];

    return (
      <div>
        <p>{textThatChanges}</p>
        <VscChevronDown className="arrow_down_icon" />
      </div>
    );
  }
}

export default WelcomWords;
