import React, { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  // 📌 `useId` для створення унікальних `id` для полів форми
  const nameId = useId();
  const numberId = useId();

  // 📌 Схема валідації для `Formik`
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Мінімум 3 символи").max(50, "Максимум 50 символів").required("Обов'язково"),
    number: Yup.string().min(3, "Мінімум 3 символи").max(50, "Максимум 50 символів").required("Обов'язково"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onAddContact({ id: nanoid(), ...values });
        actions.resetForm(); // 📌 Очищення форми після додавання контакту
      }}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name:</label>
        <Field id={nameId} type="text" name="name" />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label htmlFor={numberId}>Number:</label>
        <Field id={numberId} type="text" name="number" />
        <ErrorMessage name="number" component="div" className={css.error} />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
