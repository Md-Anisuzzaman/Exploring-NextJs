"use client"

import { useState } from "react";
import axios from 'axios';

const createUser = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("email", email);
    try {
      let res = await fetch(`http://localhost:3000/api/users/create`, {
        method: 'POST',
        body: formData,
        // body: JSON.stringify({ id, name, email }),
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      });

      // let res = await axios.post(`http://localhost:3000/api/users/create`, payload)

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      let data = await res.json();
      console.log(data);
      // console.log('Response from server:', data);

      if (data.ok) {
        alert('Successfully created');
      } else {
        alert('Errors occurred');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };


  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input type="text" name='id' />
        <input type="text" name='name' />
        <input type="email" name='email' />
        <button type="submit">Submit</button>
      </form>
      {/* <form>
        <input type="text" name='id' value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form> */}
    </div>
  )
}

export default createUser

