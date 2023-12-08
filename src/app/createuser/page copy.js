"use client"

import { useState } from "react";

const createUser = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const formdata = new FormData(e.currentTarget)
  //   // fetch("http://localhost:3000/api/users/create", {
  //   //   method: "POST",
  //   //   body: formdata
  //   // })
  //   let res = await fetch('http://localhost:3000/api/users/create', {
  //     method: 'POST',
  //     body: JSON.stringify({ name, email })
  //   })

  //   res = await res.json()


  //   if (res.ok) {
  //     alert("Successfull created")
  //   } else {
  //     alert("error cccured")
  //   }
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     let res = await fetch('api/users/create', {
  //       method: 'POST',
  //       body: JSON.stringify({ name, email }),
  //       // headers: {
  //       //   'Content-Type': 'application/json',
  //       // },
  //     });

  //     if (!res.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     let data = await res.json();
  //     console.log('Response from server:', data);

  //     if (data.ok) {
  //       alert('Successfully created');
  //     } else {
  //       alert('Error occurred');
  //     }
  //   } catch (error) {
  //     console.error('Error during fetch:', error);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     let res = await fetch('http://localhost:3000/api/users/create', {
  //       method: 'POST',
  //       body: JSON.stringify({ id,name, email })
  //     })
  //     // res = await res.json()

  //     if (!res.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     let data = await res.json();
  //     console.log('Response from server:', data);

  //     if (data.ok) {
  //       alert('Successfully created');
  //     } else {
  //       alert('Error occurred');
  //     }
  //   } catch (error) {
  //     console.error('Error during fetch:', error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch(`http://localhost:3000/api/users/create`, {
        method: 'POST',
        body: JSON.stringify({ id, name, email }),
        // headers: {
        //   'Content-Type': 'application/json',
        // },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      let data = await res.json();
      console.log('Response from server:', data);

      if (data.ok) {
        alert('Successfully created');
      } else {
        alert('Error occurred');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };


  return (
    <div>
      <form>
        <input type="text" name='id' value={id} onChange={(e) => setId(e.target.value)} />
        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default createUser

