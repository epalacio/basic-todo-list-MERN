import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Task = props => {
    <p>{props.task.task}</p>
}

export default class TasksList extends Component {
    constructor(props) {
        super(props);

        this.deleteTask = this.deleteTask.bind(this);

        this.state = {tasks: []};
    };

    componentDidMount() {
        axios.get('http://localhost:5000/tasks/')
            .then(res => {
                this.setState({ tasks: res.data.task})
            })
            .catch(err => console.log(err));
    }

    deleteTask(id) {
        axios.delete('http://localhost:5000/tasks/' + id)
            .then(res => console.log(res.data));

        this.setState({
            tasks: this.state.tasks.filter(el => el._id !== id)
        })
    }

    taskList() {
        return this.state.tasks.map(currentTask => {
            return <Task task={currentTask} deleteTask={this.deleteTask} key={currentTask._id}/>
        })
    }

    render() {
        return (
          <div>
            <h3>Tasks Full List</h3>
            <table className="table">
              <p>
                { this.taskList() }
              </p>
            </table>
          </div>
        )
      }
}