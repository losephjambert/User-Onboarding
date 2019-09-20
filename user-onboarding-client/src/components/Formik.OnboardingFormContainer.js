import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import FormikOnboardingForm from './Formik.OnboardingForm';

const FormikOnboardingFormContainer = ({ users, addUser }) => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      terms: false,
    }}
    onSubmit={(values, actions) => {
      axios
        .post('https://reqres.in/api/users', values)
        .then(response => {
          console.log(response.data);
          addUser(response.data);
        })
        .catch(error => {
          console.error('There was an error submitting your form.', error);
        });
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Please provide a name for your account'),
      email: Yup.string()
        .email('not a properly formatted email')
        .required('an email address is required'),
      password: Yup.string()
        .min(12 | 'Pass word must be at least 12 characters')
        .required('please enter a valid password'),
      repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
      terms: Yup.boolean().required(),
    })}
    render={props => <FormikOnboardingForm {...props} users={users} />}
  />
);
export default FormikOnboardingFormContainer;
