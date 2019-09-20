import React from "react";

const FormikOnboardingForm = ({
  values,
  handleBlur,
  handleChange,
  handleSubmit,
  errors
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          name="name"
        />
        {errors.name && (
          <p style={{ display: "inline" }} className="error">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email">email: </label>
        <input
          id="email"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          name="email"
        />
        {errors.email && (
          <p style={{ display: "inline" }} className="error">
            {errors.email}
          </p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikOnboardingForm;
