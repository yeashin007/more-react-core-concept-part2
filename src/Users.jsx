import { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users: {users.length}</h2>
      {users.map((user) => (
        <User friend={user}></User>
      ))}
    </div>
  );
}
