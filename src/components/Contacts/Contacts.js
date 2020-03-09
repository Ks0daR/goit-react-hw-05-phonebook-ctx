import React from 'react';
import withThemeContext from '../hoc/withThemeContext';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({ elements, onRemoveContacts, theme }) => {
  return (
    <>
      <h2 className={theme ? styles.Title : styles.TitleDark}>Contacts</h2>
      <ul className={styles.list}>
        {elements.map(({ id, name, number }) => (
          <li
            className={theme ? styles.ListElement : styles.ListElementDark}
            key={id}
          >
            {name} {number}
            <button
              type="button"
              className={theme ? styles.Button : styles.ButtonDark}
              onClick={() => onRemoveContacts(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveContacts: PropTypes.func.isRequired,
};

export default withThemeContext(Contacts);
