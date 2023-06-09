import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IUser from '../interfaces/IUser';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        setError(error.response.data.error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All users</h2>

      {error && <p>{error}</p>}

      <ul>
        {users.map((user: IUser) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
