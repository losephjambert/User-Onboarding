import React from 'react';

const User = ({ user }) => {
  return (
    <li style={{ marginBottom: '25px', outline: '1px solid red' }}>
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
      <h4>{user.terms && `Agreed to terms of service`}</h4>
    </li>
  );
};

export default User;
