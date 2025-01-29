import React, { useId } from "react";  // Імпортуємо React і хук useId для генерації унікальних id для елементів
import { Formik, Form, Field, ErrorMessage } from "formik";  // Імпортуємо компоненти Formik для роботи з формами
import { nanoid } from "nanoid";  // Імпортуємо nanoid для генерації унікальних id для контактів
import * as Yup from "yup";  // Імпортуємо Yup для валідації даних форми
import css from "./ContactForm.module.css";  // Імпортуємо стилі для компонента

const ContactForm = ({ onAddContact }) => {  // Оголошуємо компонент ContactForm, який приймає пропс onAddContact для додавання нового контакту
  const nameId = useId();  // Генеруємо унікальний id для поля 'name'
  const numberId = useId();  // Генеруємо унікальний id для поля 'number'

  // Визначаємо схему валідації для форми з допомогою Yup
  const validationSchema = Yup.object({
    name: Yup.string()  // Поле 'name' має бути рядком
      .min(3, "Мінімум 3 символи")  // Мінімум 3 символи
      .max(50, "Максимум 50 символів")  // Максимум 50 символів
      .required("Обов'язково"),  // Поле обов'язкове для заповнення
    number: Yup.string()  // Поле 'number' має бути рядком, що складається тільки з цифр
      .matches(/^\d+$/, "Тільки цифри")  // Перевіряємо, щоб були тільки цифри
      .min(3, "Мінімум 3 цифри")  // Мінімум 3 цифри
      .max(15, "Максимум 15 цифр")  // Максимум 15 цифр
      .required("Обов'язково"),  // Поле обов'язкове для заповнення
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}  // Початкові значення полів
      validationSchema={validationSchema}  // Валідація за допомогою схем
      onSubmit={(values, actions) => {  // Обробник події відправки форми
        onAddContact({ id: nanoid(), ...values });  // Додаємо новий контакт, генеруючи унікальний id
        actions.resetForm();  // Очищаємо форму після відправки
      }}
    >
      {({ setFieldValue }) => (  // Рендерим форму
        <Form className={css.form}>  {/* Загорнуте в Formik, щоб автоматично керувати станом форми */}
          <div className={css.formGroup}>  {/* Група елементів форми */}
            <label className={css.label} htmlFor={nameId}>Name:</label>  {/* Лейбл для поля 'name' */}
            <div className={css.inputWrapper}>  {/* Обгортка для поля вводу */}
              <Field className={css.input} id={nameId} type="text" name="name" />  {/* Поле вводу для 'name' */}
              <ErrorMessage name="name" component="div" className={css.error} />  {/* Повідомлення про помилку для 'name' */}
            </div>
          </div>

          <div className={css.formGroup}>  {/* Група елементів форми */}
            <label className={css.label} htmlFor={numberId}>Number:</label>  {/* Лейбл для поля 'number' */}
            <div className={css.inputWrapper}>  {/* Обгортка для поля вводу */}
              <Field
                className={css.input}
                id={numberId}
                type="text"
                name="number"
                pattern="\d*"  // Дозволяє вводити тільки цифри через атрибут pattern
                inputMode="numeric"  // Включає цифрову клавіатуру на мобільних пристроях
                onInput={(e) => {  // Обробник вводу, щоб дозволити лише цифри
                  e.target.value = e.target.value.replace(/\D/g, "");  // Видаляє всі символи, що не є цифрами
                  setFieldValue("number", e.target.value);  // Оновлює значення поля 'number'
                }}
              />
              <ErrorMessage name="number" component="div" className={css.error} />  {/* Повідомлення про помилку для 'number' */}
            </div>
          </div>

          <button className={css.button} type="submit">Add Contact</button>  {/* Кнопка для відправки форми */}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;  // Експортуємо компонент ContactForm
