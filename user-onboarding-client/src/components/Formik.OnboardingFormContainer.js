import React from "react";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import FormikOnboardingForm from "./Formik.OnboardingForm";

const validateEmail = value => {
  let error;
  if (!value) {
    error = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const FormikOnboardingFormContainer = ({ users, addUser }) => (
  <Formik
    initialValues={{ name: "", email: "" }}
    onSubmit={(values, actions) => {
      axios
        .post("https://reqres.in/api/users", values)
        .then(response => {
          console.log(response.data);
          addUser(response.data);
        })
        .catch(error => {
          console.error("There was an error submitting your form.", error);
        });
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("Please provide a name for your account"),
      email: Yup.string()
        .email("not a properly formatted email")
        .required("an email address is required")
    })}
    render={props => <FormikOnboardingForm {...props} users={users} />}
  />
);
export default FormikOnboardingFormContainer;
