import React, { Component, createContext } from 'react';

const Context = createContext();

export default class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  toggleTheme = () => {
    this.setState(prevState => ({ theme: !prevState.theme }));
  };

  state = {
    theme: false,
    onToggle: this.toggleTheme,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
