import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';


function Header() {

  const [email, setEmail] = useState("")

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
          setEmail(user.email)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])


const handleLogout = () => {               
  signOut(auth).then(() => {
  // Sign-out successful.
      console.log("Signed out successfully")
  }).catch((error) => {
  // An error happened.
  });
}

  return (
    <div className='flex flex-row bg-slate-200 p-5'>
        <div className='items-center w-1/2'>
            <h1 className="text-3xl font-bold underline">Book App</h1>
        </div>
        <div className='flex flex-row-reverse items-center w-1/2 gap-x-5'>
            <button onClick={handleLogout}>Sign out</button>
            <p>{email}</p>
            <p>Friends</p>
            <p>Collections</p>
            <p>Books</p>
        </div>
    </div>
  )
}

export default Header
