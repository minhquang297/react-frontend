import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFisrtNameHandler = this.changeFisrtNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);

    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        };
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees')
        })
    }

    changeFisrtNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    cancel(){
        this.props.history.push('/employees')
    }

    render() {
        return (
            <div>
                <h1>Employee Form</h1>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="">First Name: </label>
                                    <input type="text" placeholder="First Name"
                                        name="firstName" className="form-control"
                                        value={this.state.firstName}
                                        onChange={this.changeFisrtNameHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Last Name: </label>
                                    <input type="text" placeholder="Last Name"
                                        name="lastName" className="form-control"
                                        value={this.state.lastName}
                                        onChange={this.changeLastNameHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email ID: </label>
                                    <input type="text" placeholder="Email ID"
                                        name="emailId" className="form-control"
                                        value={this.state.emailId}
                                        onChange={this.changeEmailHandler}
                                    />
                                </div>

                                <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }} >Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;