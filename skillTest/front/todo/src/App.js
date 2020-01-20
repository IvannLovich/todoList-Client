import React, { Component } from 'react';
import Tasks from './components/tasks/Tasks';
import Form from './components/form/Form';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get('http://localhost:8000/api/todo/tasks')
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
  };

  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/todo/tasks/${item.id}/`)
      .then(res => this.refreshList());
  };

  handleSubmit = item => {
    axios
      .post('http://localhost:8000/api/todo/tasks/', item)
      .then(res => this.refreshList());
  };
  

  render() {
    return (
      <div className="todo-app container">
        <h2 className="center blue-text">Listado de tareas</h2>
        <Tasks tasks={this.state.todoList} del={this.handleDelete} />
        <Form add={this.handleSubmit} refresh={this.refreshList} />
      </div>
    );
  }
}

export default App;
