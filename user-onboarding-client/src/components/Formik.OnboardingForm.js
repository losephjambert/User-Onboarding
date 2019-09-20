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
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && <div id="feedback">{errors.name}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikOnboardingForm;
