import './employees-add-form.css';
import {Component} from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new Employee</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        onChange = {this.onValueChange}
                        className="form-control new-post-label"
                        placeholder="Name"
                        name = "name"
                        value = {name}
                        required
                         />
                    <input type="number"
                        onChange = {this.onValueChange}
                        className="form-control new-post-label"
                        placeholder="Salary"
                        name = "salary"
                        value = {salary}
                        required
                        />
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;