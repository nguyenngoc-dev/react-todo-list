import React, { Component } from "react";

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: 1
        }
    }
    onClick = (sortName, sortStatus) => {
        this.setState({
            name: sortName,
            status: sortStatus
        })
        this.props.onSort(sortName, sortStatus)
    }
    render() {
        let {name, status} = this.state
        return(
          
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick = {() => this.onClick('name', 1)}>
                            <a role="button">
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                                {(name === 'name' && status === 1) ? <i className="fas fa-check" style = {{float:'right',lineHeight:1.6}}></i>: ''}
                            </a>
                        </li>
                        <li onClick = {() => this.onClick('name', -1)}>
                            <a role="button">
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                                {(name === 'name' && status === -1) ? <i className="fas fa-check" style = {{float:'right',lineHeight:1.6}}></i>: ''}
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick = {() => this.onClick('status', 1)}>
                        <a role="button" style = {{display:'inline'}} >Trạng Thái Kích Hoạt</a>
                        {(name === 'status' && status === 1) ? <i className="fas fa-check" style = {{float:'right',lineHeight:1.6}}></i>: ''}
                        </li>
                        <li onClick = {() => this.onClick('status', -1)}>
                        <a role="button" style = {{display:'inline'}}> Trạng Thái Ẩn</a>
                        {(name === 'status' && status === -1) ? <i className="fas fa-check" style = {{float:'right',lineHeight:1.6}}></i>: ''}
                        </li>
                    </ul>
                </div>
            </div> 
               
            
        )
    }
}
export default Sort;