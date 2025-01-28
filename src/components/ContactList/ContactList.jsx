import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
