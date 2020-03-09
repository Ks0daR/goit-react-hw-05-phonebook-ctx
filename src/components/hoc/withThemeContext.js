import React from 'react';
import ThemeContext from '../../context/Theme';

const withThemeContext = WrappedComponent => {
  return function WithThemeContext(props) {
    return (
      <ThemeContext.Consumer>
        {({ theme, onToggle }) => (
          <WrappedComponent {...props} theme={theme} onToggle={onToggle} />
        )}
      </ThemeContext.Consumer>
    );
  };
};

export default withThemeContext;
