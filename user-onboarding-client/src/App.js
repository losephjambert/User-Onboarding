import React, { useState } from "react";
import OnboardingForm from "./components/OnboardingForm";
import FormikOnboardingFormContainer from "./components/Formik.OnboardingFormContainer";

function App() {
  const [users, setUsers] = useState();
  const addUser = user => {
    setUsers(user);
  };
  return (
    <div>
      <header></header>
      <main>
        <h2>withFormik form</h2>
        <OnboardingForm />
        <div>
          <h2>Formik form</h2>
          <FormikOnboardingFormContainer users={users} addUser={addUser} />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
