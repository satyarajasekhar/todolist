import { render } from "@testing-library/react";
import React, { Component } from "react";


class Todoitem extends Component{

    constructor(props){
        super(props)
       this.state = ({id: props.id, todo: props.todo, ch: false});
    }
    itemchanged = (e) => {
      //this.refs.complete.state.checked
      if(e.target.checked){
        this.setState({ch:true})
      }else{
        this.setState({ch:false})
      }
    }

    render(){
        var key = this.state.id;
        var val = this.state.todo;
        var chec = this.state.ch? "Completed":"Pending";
        return <div><input type="checkbox" checked={this.state.ch} onChange={this.itemchanged}/> <label name={key} > {key} : {val} : {chec}</label></div>;
    }
  }

export default Todoitem;