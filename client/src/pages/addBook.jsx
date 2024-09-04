import { useState } from 'react'
import axios from "axios";



function Addbook(){
    const [newUser, setNewUser] = useState({ name: '', surname: '' }); 
    const [users, setUsers] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
      };


    const handleSubmit = (event) => {
        event.preventDefault();
        const newUserData = { ...newUser };
        const existingUser = users.find((user) => user.name === newUserData.name && user.surname === newUserData.surname);
        if (!existingUser) {
          setUsers((prevUsers) => [...prevUsers, newUserData]);
          setNewUser({ name: '', surname: '' }); 
        //   console.log("adding to the slite3");
      
          // Send the new user data to the server
          axios.post("http://localhost:5000/users", newUserData)
            .then((response) => {
              console.log("User is signed in:", response.data);
            })
            .catch((error) => {
              console.log("Error adding user to server:", error);
            });
        } else {
          alert("User already exists!");
        }
      };


    return(
        <div className="card2" style={{ width: "300px", height: "300px", backgroundColor: "black", color: "white", borderRadius: "10px", alignItems: "center",textAlign:"center" }}>
        <form onSubmit={handleSubmit}>
            <br /><br />
          <label>
          
            <input type="text" name="name" placeholder='Username' value={newUser.name} onChange={handleInputChange} style={{ borderRadius: "5px", border: "none",padding:"5px" ,textAlign:"center"}} />
          </label>
          <br />
          <br />
          <label>
           
            <input type="password" name="surname" placeholder='password' value={newUser.surname} onChange={handleInputChange} style={{ borderRadius: "5px", border: "none",padding:"5px" ,textAlign:"center"}} />
          </label>
          <br />
          <br />
          <h4>forgot your details?</h4>
          <button type="submit" style={{ padding: "5px", borderRadius: "5px" }}>Add User</button>
        </form>
      </div>
    )
}export default Addbook