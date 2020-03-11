import React from 'react';
import ContactListItem from './ContactListItem';
import withThemeContext from '../hoc/withThemeContext';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({ elements, onRemoveContacts, theme }) => {
  return (
    <>
      <h2 className={theme ? styles.Title : styles.TitleDark}>Contacts</h2>
      <ul className={styles.list}>
        {elements.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onRemove={onRemoveContacts}
            theme={theme}
          />
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
