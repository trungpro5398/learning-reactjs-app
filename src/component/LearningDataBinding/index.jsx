import React, { Component } from "react";

export default class LearningDataBinding extends Component {
  name = "husky";
  age = 1;
  list = ["a", "b", "c"];
  render() {
    return (
      <div>
        <p>
          Name: <span>{this.name}</span>
        </p>
        <ul>
          {this.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
