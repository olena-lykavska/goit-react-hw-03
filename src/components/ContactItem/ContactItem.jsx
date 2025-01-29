import React from "react";  // Імпортуємо React для створення компонентів
import css from "./ContactItem.module.css";  // Імпортуємо стилі для компонента

const ContactItem = ({ contact, onDelete }) => {  // Оголошуємо компонент ContactItem, що приймає пропси contact і onDelete
  return (
    <li className={css.item}>  {/* Створюємо елемент списку для відображення контакту */}
      {contact.name}: {contact.number}  {/* Виводимо ім'я і номер телефону контакту */}
      <button onClick={() => onDelete(contact.id)}>Delete</button>  {/* Кнопка для видалення контакту, яка викликає функцію onDelete з переданим id контакту */}
    </li>
  );
};

export default ContactItem;  // Експортуємо компонент ContactItem для використання в інших частинах програми
