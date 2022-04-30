import { render } from "@testing-library/react";
import React, { Component } from "react";
import Todoitem from "./todoitem";


class Todoitems extends Component{

    constructor(props){
        super(props);
        this.state = {items: this.props.list}
    }

    render(){
        var rows = [];
        for (var i = 0; i < this.state.items.length; i++) {
            var itemout = <Todoitem id={i} todo={this.state.items[i]} />
            rows.push(itemout);
        }
        return <div>{rows}</div>;
    }
    
  }

export default Todoitems;