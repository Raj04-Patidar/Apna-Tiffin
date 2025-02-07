import axios from "axios";

const getHeader = {
  headers: {
    "Content-Type": "application/json",
  },
};

const registerUser = async (userData) => {
  try {
    console.log("Sending Data:", userData); 
    const response = await axios.post(
      "http://localhost:8080/auth/register",  
      JSON.stringify(userData),  
      getHeader
    );
    console.log("Signup successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/login",  
      JSON.stringify({ email, password }), 
      getHeader
    );
    console.log("Login successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

const bookTiffin = async (bookingData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/tiffin/book",  
      JSON.stringify(bookingData), 
      getHeader
    );
    console.log("Booking successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Booking failed:", error);
    throw error;
  }
};

export { loginUser, registerUser, bookTiffin };
