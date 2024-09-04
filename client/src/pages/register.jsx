// import axios from 'axios';
// import { useState, useEffect } from 'react';

// // Rest of your code...

// function RegisterUser() {
//   const [userData, setUserData] = useState({
//     name: '',
//     surname: '',
//     id: '',
//     cellphone: '',
//     email: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const updatedUserData = {
//       name: formData.get('name'),
//       surname: formData.get('surname'),
//       id: formData.get('id'),
//       cellphone: formData.get('cellphone'),
//       email: formData.get('email'),
//     };
  
//     if (isEditing) {
//         // Update existing data
//         axios.put('/register', updatedUserData)
//           .then((response) => console.log(response.data))
//           .catch((error) => console.error(error));
//       }else {
//       console.log('New user is registering...');
//       // Create new data
//      axios.post('/register', updatedUserData)
//      .then((response) => console.log(response.data))
//       .catch((error) => console.error(error));
//         // .catch((error) => console.error(error));
//     }
//   };

//   const handleUpdate = () => {
//     setIsEditing(true);
//     axios.get('/getdata')
//     .then((response) => {
//       setUserData(response.data);
//     })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={userData.name} onChange={(event) => setUserData({ ...userData, name: event.target.value })} />
//       </label>
//       <br />
//       <label>
//         Surname:
//         <input type="text" name="surname" value={userData.surname} onChange={(event) => setUserData({ ...userData, surname: event.target.value })} />
//       </label>
//       <br />
//       <label>
//         ID:
//         <input type="text" name="id" value={userData.id} onChange={(event) => setUserData({ ...userData, id: event.target.value })} />
//       </label>
//       <br />
//       <label>
//         Cellphone Number:
//         <input type="tel" name="cellphone" value={userData.cellphone} onChange={(event) => setUserData({ ...userData, cellphone: event.target.value })} />
//       </label>
//       <br />
//       <label>
//         Email Address:
//         <input type="email" name="email" value={userData.email} onChange={(event) => setUserData({ ...userData, email: event.target.value })} />
//       </label>
//       <br />
//       {isEditing ? (
//         <button type="submit">Update</button>
//       ) : (
//         <button type="submit">Register</button>
//       )}
//       <button type="button" onClick={handleUpdate}>
//         Edit
//       </button>
//     </form>
//   );
// }

// export default RegisterUser;


