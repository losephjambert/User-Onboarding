import React from 'react';

const FormikOnboardingForm = ({ values, handleBlur, handleChange, handleSubmit, errors, touched }) => {
  console.log(errors);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name: </label>
        <input id='name' type='text' onChange={handleChange} onBlur={handleBlur} value={values.name} name='name' />
        {touched.name && errors.name && (
          <p style={{ display: 'inline' }} className='error'>
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor='email'>email: </label>
        <input id='email' type='text' onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' />
        {touched.email && errors.email && (
          <p style={{ display: 'inline' }} className='error'>
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='text'
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.password && errors.password && 'input-error'}
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor='repeatPassword'>Repeat Password</label>
          <input
            id='repeatPassword'
            type='text'
            name='repeatPassword'
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.repeatPassword && errors.repeatPassword && 'input-error'}
          />
          {touched.repeatPassword && errors.repeatPassword && <p>{errors.repeatPassword}</p>}
        </div>
      </div>
      <div>
        <label htmlFor='terms'>Do you agree to our Terms of Service?</label>
        <input
          required
          id='terms'
          type='checkbox'
          name='terms'
          value={values.terms}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.terms && <p>{errors.terms}</p>}
      </div>
      <div>
        <button type='submit'>Create Profile</button>
      </div>
    </form>
  );
};

export default FormikOnboardingForm;
