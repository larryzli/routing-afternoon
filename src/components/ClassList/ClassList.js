import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
    constructor() {
        super();

        this.state = {
            students: []
        };
    }
    componentDidMount() {
        axios
            .get(
                `http://localhost:3005/students?class=${
                    this.props.match.params.class
                }`
            )
            .then(result => {
                this.setState({
                    students: result.data
                });
            })
            .catch(console.log);
    }
    render() {
        const students = this.state.students.map((val, i) => (
            <Link key={i} to={`/student/${val.id}`}>
                <h3>
                    {val.first_name} {val.last_name}
                </h3>
            </Link>
        ));
        return (
            <div className="box">
                <Link to="/">
                    <button>Back to Home</button>
                </Link>
                <h1>{this.props.match.params.class}</h1>
                <h2>ClassList:</h2>
                {students}
            </div>
        );
    }
}
