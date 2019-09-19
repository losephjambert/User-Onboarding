import React from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';

const OnboardingForm = ({ values }) => (
  <Form>
    <div>
      <label htmlFor='name'>Name</label>
      <Field component='input' type='text' name='name' value={values.name} />
    </div>
    <div>
      <button type='submit'>Create Profile</button>
    </div>
  </Form>
);

export default withFormik({
  mapPropsToValues({ name }) {
    return {
      name: name || '',
    };
  },
  handleSubmit(values) {
    console.log(values);
  },
})(OnboardingForm);
