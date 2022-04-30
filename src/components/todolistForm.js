import { render } from "@testing-library/react";
import React, { Component } from "react";
import Todoitem from "./todoitem";
import Todoitems from "./todoitems";


class TodolistForm extends Component{

    constructor(props){
        super(props)
        this.state = ({todolist: []});
    }

    addtolist = (event) => {
        event.preventDefault();
        var todoval = document.getElementById("todo").value;
        var existinglist = this.state.todolist
        existinglist[existinglist.length]= todoval;
        this.setState({todolist: existinglist});
    }

    render(){
        return (
            <form onSubmit={this.addtolist} id="todoform">
                <label>Enter Todo items</label>
                <input type="text" id="todo"></input>
                <input type="submit"></input>
                <Todoitems list={this.state.todolist} />
            </form>
        );
    }
    
  }

export default TodolistForm;