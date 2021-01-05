import React, { Component } from 'react';

export default class CreateTask extends Component {
    constructor(props) {
        super(props);

        this.onChangeTask = this.onChangeTask.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task: ''
        };
    };

    componentDidMount() {
        this.setState({
            task: 'FrontEnd Hardcoded Task'
        })
    }

    onChangeTask(e) {
        this.setState({
            task: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const task = {
            task: this.state.task
        };

        console.log(task);

        this.setState({
            task: ''
        });

        window.location('/');
    }

    render() {
        return (
            <div>
                <h3>Create New Task</h3>
                {/* Triggers the form to submit the info with the onSubmit method */}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.task}
                            onChange={this.onChangeTask}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Task Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}