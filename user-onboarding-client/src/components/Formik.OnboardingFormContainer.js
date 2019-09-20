import React from "react";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import FormikOnboardingForm from "./Formik.OnboardingForm";

const FormikOnboardingFormContainer = ({ users, addUser }) => (
  <Formik
    initialValues={{ name: "jared" }}
    onSubmit={(values, actions) => {
      console.log("actions", actions);
      console.log("values", values);
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
      name: Yup.string().required("Please provide a name for your account")
    })}
    render={props => <FormikOnboardingForm {...props} users={users} />}
  />
);
export default FormikOnboardingFormContainer;
