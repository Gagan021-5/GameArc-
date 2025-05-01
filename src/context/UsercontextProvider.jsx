import React, { useState } from 'react';
import UserContext from './UserContext';

const UsercontextProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  return (
    <UsercontextProvider value={{user, setuser}}>
      {children}
    </UsercontextProvider>
  );
};

export default UsercontextProvider;
