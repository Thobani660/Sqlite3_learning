// uses axios to get data  from server
// Import the axios library
import axios from 'axios';



//  function to fetch data from the server
const fetchData = async () => {
  try {
    // Use axios to make a GET request to the server
    const response = await axios.get('/api/users');
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
  }
};

// displayusers using card component
// Import the Card component

// Define a component to display the users



// rout for log in 