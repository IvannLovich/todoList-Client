import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  handleChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.add(this.state);
    e.target.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Escribe una tarea</label>
          <input type="text" onChange={this.handleChange} />
          <button
            type="submit"
            className="waves-effect waves-light btn buttonColor"
          >
            Crear tarea
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
