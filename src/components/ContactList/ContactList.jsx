import React from "react";  // Імпортуємо React для створення компонента
import ContactItem from "../ContactItem/ContactItem";  // Імпортуємо компонент ContactItem для відображення кожного контакту
import css from "./ContactList.module.css";  // Імпортуємо стилі для компонента ContactList

const ContactList = ({ contacts, onDeleteContact }) => {  // Оголошуємо компонент ContactList, що приймає два пропси: contacts (список контактів) і onDeleteContact (функція для видалення контакту)
  return (
    <ul className={css.list}>  {/* Створюємо список ul для відображення контактів */}
      {contacts.map((contact) => (
        <ContactItem 
          key={contact.id}  // Встановлюємо унікальний ключ для кожного елемента списку (потрібно для оптимізації React)
          contact={contact}  // Передаємо дані контакту в пропс contact
          onDelete={onDeleteContact}  // Передаємо функцію onDeleteContact для видалення контакту
        />
      ))}
    </ul>
  );
};

export default ContactList;  // Експортуємо компонент ContactList для використання в інших частинах програми
