import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            error: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;
        if (name !== '' && salary !== '') {
            this.props.onAdd(name, salary);
            this.setState({
                name: '',
                salary: '',
                error: ''
            })
        } else {
            this.setState({
                error: 'is-invalid'
            })
        }
    }

    render() {
        const classNames = `form-control new-post-label ${this.state.error}`
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className={classNames}
                        placeholder="Как его зовут?"
                        name="name"
                        value={this.state.name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className={classNames}
                        placeholder="З/П в $?"
                        name="salary"
                        value={this.state.salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;