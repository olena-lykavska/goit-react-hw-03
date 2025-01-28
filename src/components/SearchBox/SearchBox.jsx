import React, { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  // 📌 `useId` для унікального `id` поля введення
  const searchId = useId();

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name:</label>
      <input
        id={searchId}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
