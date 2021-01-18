import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }


    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            this.setState({
                employee: res.data
            })
        })
    }
    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <br />
                            <label htmlFor="">Employee First Name</label>
                            <br />
                            <div>{this.state.employee.firstName}</div>
                            <br />
                            <label htmlFor="">Employee Last Name</label>
                            <br />
                            <div>{this.state.employee.lastName}</div>
                            <br />
                            <label htmlFor="">Employee Email</label>
                            <br />
                            <div>{this.state.employee.emailId}</div>
                            <br />
                        </div>
                    </div>
                    <button className="btn btn-info" onClick={() => {
                        this.props.history.push('/employees')
                    }}>Back</button>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;