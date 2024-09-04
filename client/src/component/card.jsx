import React, { useState, useEffect } from 'react';
import axios from "axios";
import Addbook from '../pages/addBook';

const Card = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:5000/users")
        .then((response) => {
          console.log(response.data, "checking"); 
          setUsers(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching users:", error);
          setLoading(false);
        });
    }, 3000); 
  }, []);

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

    // DELETE to the server
    axios.delete(`http://localhost:5000/users/${id}`)
      .then((response) => {
        console.log("User deleted from server:", response.data);
      })
      .catch((error) => {
        console.log("Error deleting user from server:", error);
      });
  };

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditing(id);
    setEditedUser(userToEdit);
  };

  const handleSaveChanges = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return editedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    setEditing(null);

    // PATCH to the server
    axios.patch(`http://localhost:5000/users/${id}`, editedUser)
      .then((response) => {
        console.log("User updated on server:", response.data);
      })
      .catch((error) => {
        console.log("Error updating user on server:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="card-container" style={{ width: "400px", height: "600px" }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          Array.isArray(users) ? (
            users.map((user, index) => (
              <div key={index} className="card" style={{ marginTop: "10px", width: "200px", height: "300px", backgroundColor: "black", color: "white", borderRadius: "10px", textAlign: "center" }}>
                {editing === user.id ? (
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={editedUser.name}
                      onChange={handleInputChange}
                      style={{ padding: "5px", borderRadius: "5px" }}
                    />
                    <br />
                    <input
                      type="text"
                      name="surname"
                      value={editedUser.surname}
                      onChange={handleInputChange}
                      style={{ padding: "5px", borderRadius: "5px" }}
                    />
                    <br />
                    <button onClick={() => handleSaveChanges(user.id)} style={{ padding: "5px", borderRadius: "5px" }}>
                      Save Changes
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2>{user.name}</h2>
                    <p>{user.surname}</p>
                    <br />
                    <button onClick={() => handleEdit(user.id)} style={{ padding: "5px", borderRadius: "5px" }}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(user.id)} style={{ padding: "5px", borderRadius: "5px" }}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="card" style={{ width: "200px", height: "400px", backgroundColor: "black", color: "white", borderRadius: "10px" }}>
             <h2>{users.name}</h2>
              <h1>{users.surname}</h1>
              <button onClick={() => handleDelete(users.id)} style={{ padding: "5px", borderRadius: "5px" }}>Delete</button>            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Card;