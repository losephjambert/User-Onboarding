import React from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';

const OnboardingForm = ({ values }) => (
  <Form>
    <div>
      <label htmlFor='name'>Name</label>
      <Field id='name' type='text' name='name' value={values.name} />
    </div>
    <div>
      <label htmlFor='email'>Email</label>
      <Field id='email' type='text' name='email' value={values.email} />
    </div>
    <div>
      <div>
        <label htmlFor='password'>Password</label>
        <Field id='password' type='text' name='password' value={values.password} />
      </div>
      <div>
        <label htmlFor='repeatPassword'>Repeat Password</label>
        <Field id='repeatPassword' type='text' name='repeatPassword' value={values.repeatPassword} />
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
  handleSubmit(values) {
    console.log(values);
  },
})(OnboardingForm);
