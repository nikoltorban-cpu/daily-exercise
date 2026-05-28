import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../features/users/userSlice";

function UserData() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>👥 Users List</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{user.name}</h3>

          <p>📧 {user.email}</p>

          <p>📱 {user.phone}</p>

          <p>🌐 {user.website}</p>
        </div>
      ))}
    </div>
  );
}

export default UserData;
