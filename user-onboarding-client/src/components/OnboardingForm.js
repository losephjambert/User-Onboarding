import React from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

const OnboardingForm = ({ values, errors, touched }) => (
  <Form>
    <div>
      <label htmlFor='name'>Name</label>
      <Field
        id='name'
        type='text'
        name='name'
        value={values.name}
        className={touched.name && errors.name && 'input-error'}
      />
      {touched.name && errors.name && <p>{errors.name}</p>}
    </div>
    <div>
      <label htmlFor='email'>Email</label>
      <Field
        id='email'
        type='text'
        name='email'
        value={values.email}
        className={touched.email && errors.email && 'input-error'}
        validate={validateEmail}
      />
      {touched.email && errors.email && <p>{errors.email}</p>}
    </div>
    <div>
      <div>
        <label htmlFor='password'>Password</label>
        <Field
          id='password'
          type='text'
          name='password'
          value={values.password}
          className={touched.password && errors.password && 'input-error'}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label htmlFor='repeatPassword'>Repeat Password</label>
        <Field
          id='repeatPassword'
          type='text'
          name='repeatPassword'
          value={values.repeatPassword}
          className={touched.repeatPassword && errors.repeatPassword && 'input-error'}
        />
        {touched.repeatPassword && errors.repeatPassword && <p>{errors.repeatPassword}</p>}
      </div>
    </div>
    <div>
      <label htmlFor='terms'>Do you agree to our Terms of Service?</label>
      <Field id='terms' type='checkbox' name='terms' value={values.terms} />
    </div>
    <div>
      <button type='submit'>Create Profile</button>
    </div>
  </Form>
);

export default withFormik({
  mapPropsToValues({ name, email, password, repeatPassword, terms }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      repeatPassword: repeatPassword || '',
      terms: terms || false,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please provide a name for your account'),
  }),
  handleSubmit(values) {
    console.log(values);
  },
})(OnboardingForm);
