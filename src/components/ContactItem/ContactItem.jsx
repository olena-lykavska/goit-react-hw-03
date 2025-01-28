import React from "react";
import css from "./ContactItem.module.css";

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={css.item}>
      {contact.name}: {contact.number}
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
