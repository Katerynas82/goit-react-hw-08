import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContactThunk } from "../../redux/contacts/operations";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short! Min 3 symbols.")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d+$/, "Invalid phone number. Must be digits only")
    .min(10, "Phone number is too short")
    .required("Phone number is required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (items, { resetForm }) => {
    dispatch(
      addContactThunk({
        id: items.id,
        name: items.name,
        number: items.number,
      })
    );
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Name</span>
            <Field
              name="name"
              className={styles.input}
              placeholder="Add contact name"
            />
            <ErrorMessage name="name" component="p" className={styles.error} />
          </label>

          <label className={styles.label}>
            <span>Phone number</span>
            <Field
              type="tel"
              name="number"
              className={styles.input}
              placeholder="Add contact phone"
            />
            <ErrorMessage
              name="number"
              component="p"
              className={styles.error}
            />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
