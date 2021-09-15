  import React,{Component} from 'react'
  import TaskForm from "./Components/TaskForm";
  import Control from "./Components/Control";
  import TaskList from "./Components/TaskList";
  import {useState} from 'react'
  import { render } from '@testing-library/react';
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        list : [],
        isDisplayForm : false
      }
    }
    
  
  setRandomId = () => {
    return (Math.random() * Math.random()* Math.random())
  }

  onClick = () => {

    const list = [
     {
       id: this.setRandomId(),
       name: 'rửa mặt',
       status:true
     },
     {
       id: this.setRandomId(),
       name: 'ăn sáng',
       status: false
     },
     {
       id: this.setRandomId(),
       name: 'học bài',
       status: false
     },
   ];
  
   localStorage.setItem('list',JSON.stringify(list));
   
  }  
  componentDidMount() {
    if(localStorage.getItem('list') && localStorage)
    {
     
      var list = JSON.parse(localStorage.getItem('list'));
      this.setState({
        list: list
      })
    }
  }
  onToggleFrom = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }
  render() {

    return (
      <div className="App">
        <div className="container">
          <div className="text-center">
              <h1>Quản Lý Công Việc</h1>
              <hr/>
          </div>
          <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
               {this.state.isDisplayForm ?  <TaskForm /> : ''}
              </div>
              <div className={this.state.isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
                  <button type="button" 
                  className="btn btn-primary" 
                  style = {{marginBottom: 20}}
                  onClick = {this.onToggleFrom}>
                      <span className="fa fa-plus mr-5" ></span>Thêm Công Việc
                  </button>
                  <button type="button" 
                  className="btn btn-primary" 
                  style = {{marginBottom: 20, marginLeft:20}}
                  onClick = {this.onClick}>
                      Click me
                  </button>
                <Control />
                  <div className="row mt-15">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList tasks = {this.state.list}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
