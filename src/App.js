import React, { Component } from "react";
import { evaluate } from "mathjs";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ""}
  }
  handleEqual = () => {
    try{
    this.setState({ input: String(evaluate(this.state.input)) });
  } catch (e) {
    alert(e)
  }
  };
  addInput = (val) => {
    this.setState({input: this.state.input + val});
  }
  clearInput = () =>{
    this.setState({input: ""});
  }
  backSpace = () =>{
    this.setState({input: this.state.input.slice(0, -1)});
  }
  percent = () =>{
    try {
    this.setState({input:  String(evaluate(this.state.input + "*100"))});
      } catch (e) {
      alert(e)
    }
  }
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button buttonAction={this.clearInput}>Clear</Button>
            <Button buttonAction={this.addInput} opr="(">(</Button>
            <Button buttonAction={this.addInput} opr=")">)</Button>
            <Button buttonAction={this.backSpace}>&#9003;</Button>
          </div>
          <div className="row">
            <Button buttonAction={this.addInput}>7</Button>
            <Button buttonAction={this.addInput}>8</Button>
            <Button buttonAction={this.addInput}>9</Button>
            <Button buttonAction={this.addInput} opr="/">/</Button>
          </div>
          <div className="row">
            <Button buttonAction={this.addInput}>4</Button>
            <Button buttonAction={this.addInput}>5</Button>
            <Button buttonAction={this.addInput}>6</Button>
            <Button buttonAction={this.addInput} opr="*">*</Button>
          </div>
          <div className="row">
            <Button buttonAction={this.addInput}>1</Button>
            <Button buttonAction={this.addInput}>2</Button>
            <Button buttonAction={this.addInput}>3</Button>
            <Button buttonAction={this.addInput} opr="-">-</Button>
          </div>
          <div className="row">
            <Button buttonAction={this.addInput}>.</Button>
            <Button buttonAction={this.addInput}>0</Button>
            <Button buttonAction={this.handleEqual}>=</Button>
            <Button buttonAction={this.addInput} opr="+">+</Button>  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
