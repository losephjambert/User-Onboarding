import React, { useState } from 'react';
import FormikOnboardingFormContainer from './components/Formik.OnboardingFormContainer';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const addUser = user => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <header></header>
      <main>
        <section>
          <h2>Add a new user</h2>
          <FormikOnboardingFormContainer users={users} addUser={addUser} />
        </section>
        <UsersList users={users} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
