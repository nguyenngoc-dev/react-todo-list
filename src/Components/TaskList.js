import React,{Component} from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        
        this.setState({
            [name] : value
        })
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus 
        )
        
    }
    render() {
        let {tasks} = this.props;
        let taskElement = tasks.map((task,index) => {
            return <TaskItem 
            key = {task.id}
            task = {task}
            index = {index}
            onChangeStatus = {this.props.onChangeStatus}
            onDelete = {this.props.onDelete}
            onUpdate = {this.props.onUpdate}
            />
        }) 
        let {filterName, filterStatus} = this.state;
        return (
           
            <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" 
                        className="form-control"
                        name = 'filterName'
                        value = {filterName}
                        onChange = {this.onChange} />
                    </td>
                    <td>
                        <select 
                        className="form-control"
                        name = 'filterStatus'
                        value = {filterStatus}
                        onChange = {this.onChange}>
                            <option value="-1">Tất Cả</option>
                            <option value="0">Ẩn</option>
                            <option value="1">Kích Hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
               {taskElement}
            </tbody>
        </table>
        )
    }
}
export default TaskList;