import React from 'react';
import Header from '../Header';
import withThemeContext from '../hoc/withThemeContext';
import styles from './Layout.module.css';

const Layout = ({ children, theme }) => (
  <div className={theme ? styles.Layout : styles.LayoutDark}>
    <Header />
    {children}
  </div>
);

export default withThemeContext(Layout);
