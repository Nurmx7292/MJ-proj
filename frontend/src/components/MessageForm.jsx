import axios from "axios"
import React, { useState } from 'react'
import { toast } from "react-toastify"


const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mj-proj-1.onrender.com/api/v1/message/send",
        { firstName, lastName, phone, email, message },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response && response.data) {
        toast.success(response.data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error("Unexpected response from the server");
      }
    } catch (error) {
      console.error("Error response:", error.response);
      console.error("Error message:", error.message);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("No response received from server");
      } else {
        toast.error("Error in setting up request");
      }
    }
  };
  

  return (
    <div className="container form-component message-form">
      <h2>Send to us message</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input 
          type="text" 
          placeholder="Firstname" 
          value={firstName} 
          onChange={(e)=> setFirstName(e.target.value)}
          />
          <input 
          type="text" 
          placeholder="Lastname" 
          value={lastName} 
          onChange={(e)=> setLastName(e.target.value)}
          />
        </div>
        <div>
        <input 
          type="text" 
          placeholder="Email" 
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}
          />
          <input 
          type="number" 
          placeholder="Phone Number" 
          value={phone} 
          onChange={(e)=> setPhone(e.target.value)}
          />
        </div>
        <textarea rows={7} 
        placeholder="Your Message" 
        value={message} 
        onChange={(e)=> setMessage(e.target.value)}>
        </textarea>
        <div style={{ justifyContent: "center", alignItems: "center"}}>
          <button type="submit">Sent Message</button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm