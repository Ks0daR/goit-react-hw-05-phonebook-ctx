import React, { Component } from 'react';

import styles from './InputForm.module.css';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  getInputValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.getInfo(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={styles.Form} onSubmit={this.hendleSubmit}>
          <label>
            <h3>Name:</h3>
            <input
              value={name}
              placeholder="Enter name..."
              name="name"
              onChange={this.getInputValue}
            />
            <h3>Phone number: </h3>
            <input
              value={number}
              name="number"
              onChange={this.getInputValue}
              placeholder="Enter phone..."
            />
            <br />
            <button className={styles.Submit} type="submit">
              Add contact
            </button>
            <br />
          </label>
        </form>
      </>
    );
  }
}

export default InputForm;
