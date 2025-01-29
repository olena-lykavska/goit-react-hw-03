import React, { useId } from "react";  // Імпортуємо React та хук useId для генерування унікальних id
import css from "./SearchBox.module.css";  // Імпортуємо стилі для компонента SearchBox

const SearchBox = ({ value, onChange }) => {  // Оголошуємо компонент SearchBox, який приймає пропси: value (значення поля пошуку) і onChange (функція для оновлення значення)

  // 📌 `useId` для унікального `id` поля введення
  const searchId = useId();  // Використовуємо хук useId для генерації унікального id, який буде використовуватися для label і input

  return (
    <div className={css.searchBox}>  {/* Контейнер для поля пошуку */}
      <label htmlFor={searchId}>Find contacts by name:</label>  {/* Мітка для поля введення, прив'язана до input через htmlFor */}
      <input
        id={searchId}  // Встановлюємо унікальний id для input
        type="text"  // Вказуємо тип введення — текст
        value={value}  // Встановлюємо значення input з пропса value
        onChange={(e) => onChange(e.target.value)}  // Обробник події onChange для оновлення значення через onChange
      />
    </div>
  );
};

export default SearchBox;  // Експортуємо компонент SearchBox для використання в інших частинах програми
