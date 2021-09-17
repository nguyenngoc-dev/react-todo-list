import React, {Component} from "react";
class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name: '',
            status: false
        }
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        if(name === 'status')
        {
            value = target.value === 'true' ? true : false
        }
        this.setState({
            [name] : value
        })
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
    }
    onClear = () => {
        this.setState({
            name: '',
            status: false
        })
    }
    closeForm = () => {
        this.props.closeForm();
    }
    componentDidMount () {
        
        if(this.props.task)
        {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            })
        }
    }
    componentWillReceiveProps (next) {
        if(next && next.task) {
            this.setState({
                id: next.task.id,
                name: next.task.name,
                status: next.task.status
            })
        }
        else if (!next.task)
        {
            this.setState({
                id:'',
                name: '',
                status: false
            })
        }
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                    {this.state.id !== '' ? 'Cập nhật' : 'Thêm'}
                    <i class="fas fa-times"
                        style = {{float: "right", cursor: "pointer"}}
                        onClick = {this.closeForm}></i>
                    </h3>  
                </div>
                <div className="panel-body">
                    <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name = "name" 
                                value = {this.state.name}
                                onChange = {this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control"
                                required="required"
                                name = "status"
                                value = {this.state.status}
                                onChange = {this.onChange}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick = {this.onClear}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default TaskForm;