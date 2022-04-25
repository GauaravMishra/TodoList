import React, { Component } from "react";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      count:0,
    };
    console.log("Constr");
  }


  listOfItems = (e) => {
    e.preventDefault();
    let value = document.getElementById("ak").value;
    this.setState((oldItem)=>{
      
      return {todo:[...this.state.todo,value],count:oldItem.count+1}
    })

    document.getElementById("ak").value = "";
  };

  render() {
    return (
      <div>
        <input
          id="ak"
          type="text"
          placeholder="Enter a Todo..."
          className="task-input"
        />
        <button className="button-add" onClick={this.listOfItems}>
          {" "}
          Add{" "}
        </button>

        <ul>
          {this.state.todo.map((list) => {
            return (
              <li key={list} className="list-items">
                {" "}
                {list}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
