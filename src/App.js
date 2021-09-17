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
        isDisplayForm : false,
        updating: null,
        filterName: '',
        filterStatus : - 1,
        sort :{
          by :'',
          value: 1
        }
      }
    }
    
  
    setRandomId = () => {
      return (Math.random() * Math.random()* Math.random())
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
        isDisplayForm: true,
        updating: null
      }, )
     
    }
    onShowForm = () => {
      this.setState({
        isDisplayForm: true,
        
      })
    }
    closeForm = () => {
      this.setState({
        isDisplayForm: false,
        updating: null
      })
    }
    onSubmit = (data) => {
      let {list} = this.state; 
      
      if(data.id === '')
      {
        data.id = this.setRandomId();
        list.push(data);
      }
      else{
        list.forEach((task,index) => {
          if(task.id === data.id)
          {
            
            list[index] = data
            
            
          }
           
        })
      }
    
      this.setState({
        list: list,
        updating: null
      })
      localStorage.setItem('list', JSON.stringify(list))
      
    }
    onChangeStatus = (id) => {
      let {list} = this.state;
      list.forEach((task,index) => {
        if(task.id === id)
        {
          task.status = !task.status
        }
      })
      this.setState({
        list:list
        
      })
      localStorage.setItem('list', JSON.stringify(list))
    }
    onDelete = (id) => {
      let {list} = this.state;
      list.forEach((task,index) => { 
        
        if(task.id === id)
        {
        
          list.splice(index,1)
        }
      })
      this.setState({
        list:list
      })
      localStorage.setItem('list', JSON.stringify(list))
    }
    onUpdate = (id) => {
      let {list} = this.state;
      list.forEach((task,index) => { 
        
        if(task.id === id)
        {
          this.setState({
            updating: task
        })
         
        }
      })
      this.onShowForm();
      
    }
    onFilter = (filterName,filterStatus) => {
      filterStatus = +filterStatus;
      this.setState({
        filterName: filterName.toLowerCase(),
        filterStatus: filterStatus
      })
    }
    onSearch = (keyword) => {
      this.setState({
        keyword: keyword
      })
    }
    onSort = (sortName, sortStatus) => {
      this.setState({
        sort: {
          by: sortName,
          value: sortStatus
        }
      })
    }

  render() {
    let {filterName, filterStatus, list, keyword,sort} = this.state;
    if(filterName) {
      list = list.filter(item => {
     
        return item.name.toLowerCase().indexOf(filterName) !== -1;
      })
    }
    list = list.filter(item => {
      if(filterStatus === -1)
      {
        return item;
      }
      else{
        return item.status === (filterStatus === 1 ? true : false)
      }
      
    })
    if(keyword)
    {
      list = list.filter(item => {
     
        return item.name.toLowerCase().indexOf(keyword) !== -1;
      })
    }
    if(sort.by ==='name')
    {
      list.sort((a,b) => {
        if(a.name > b.name) return sort.value
        else if(a.name <b.name) return -sort.value
        else return 0
      })
    }
    else {
      list.sort((a,b) => {
        if(a.status > b.status) return -sort.value
        else if(a.status <b.status) return sort.value
        else return 0
      })
    }

    return (
      <div className="App">
        <div className="container">
          <div className="text-center">
              <h1>Quản Lý Công Việc</h1>
              <hr/>
          </div>
          <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
               {this.state.isDisplayForm ?  
               <TaskForm 
                 onSubmit = {this.onSubmit}
                 task = {this.state.updating}
                 closeForm = {this.closeForm}
               /> : ''}
              </div>
              <div className={this.state.isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
                  <button type="button" 
                  className="btn btn-primary" 
                  style = {{marginBottom: 20}}
                  onClick = {this.onToggleFrom}>
                      <span className="fa fa-plus mr-5" ></span>Thêm Công Việc
                  </button>
                  
                <Control 
                  onSearch = {this.onSearch}
                  onSort = {this.onSort}
                />
                  <div className="row mt-15">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList 
                          tasks = {list}
                          onChangeStatus = {this.onChangeStatus}
                          onDelete = {this.onDelete}
                          onUpdate = {this.onUpdate}
                          onFilter = {this.onFilter}
                          />
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
