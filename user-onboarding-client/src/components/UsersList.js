import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
  return (
    <section>
      <h2>Current Users</h2>
      <ul>
        {users.map((user, i) => (
          <User key={i} user={user} />
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
