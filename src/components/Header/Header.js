import React from 'react';
import styles from './Header.module.css';
import withThemeContext from '../hoc/withThemeContext';

const Header = ({ theme, onToggle }) => (
  <>
    <h1 className={theme ? styles.Header : styles.HeaderDark}>Phone Book</h1>
    <button type="button" onClick={onToggle}>
      {theme ? 'Dark' : 'Light'}
    </button>
  </>
);

export default withThemeContext(Header);
