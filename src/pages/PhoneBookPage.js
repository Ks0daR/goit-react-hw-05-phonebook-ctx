import React, { Component } from 'react';
import InputForm from '../components/InputForm';
import createContact from '../utils/createContact';

class PhoneBookPage extends Component {
  state = {
    contacts: [],
  };

  getUserInfo = ({ name, number }) => {
    const checkedName = this.checkedDoubleInput(name);
    if (checkedName) {
      alert(`Имя ${name} есть в телефонной книге!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, createContact(name, number)],
    }));
  };

  checkedDoubleInput = name => {
    console.log(this.state.contacts.name);
    return this.state.contacts.find(contact => contact.name === name);
  };

  render() {
    console.log(this.state);
    return (
      <>
        <InputForm getInfo={this.getUserInfo} />
      </>
    );
  }
}

export default PhoneBookPage;
