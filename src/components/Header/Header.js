import React from 'react';
import styles from './Header.module.css';
import withThemeContext from '../hoc/withThemeContext';

const Header = ({ theme, onToggle }) => (
  <>
    <div className={styles.Header}>
      <h1 className={theme ? styles.Title : styles.TitleDark}>Phone Book</h1>
    </div>
    <button
      className={theme ? styles.Button : styles.ButtonDark}
      type="button"
      onClick={onToggle}
    >
      {theme ? 'Dark' : 'Light'}
    </button>
    <p>Active theme {theme ? 'Light' : 'Dark'}</p>
  </>
);

export default withThemeContext(Header);
