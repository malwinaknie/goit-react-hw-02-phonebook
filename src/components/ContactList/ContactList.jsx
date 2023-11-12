import React from "react";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => (
    <ul>
      {contacts.map(({id, name, number}) => (
        <li key={id}>{name + ': ' + number}
        <button 
        type="submit"
        onClick={() => deleteContact(id)}>
          Delete
        </button>
        </li>
      ))}
    </ul>
  );
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    deleteContact: PropTypes.func.isRequired,
  }

  
  export default ContactList;