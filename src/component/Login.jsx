import React, { useRef, useState } from "react";
import Header from "./Header";
import CheckFormValidation from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { BG_IMG } from "../utils/constants";

const Login = () => {
  
  const [isSigned, setIsSigned] = useState(true);
  const [errormessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmitButton = () => {
  const nameValue = name.current ? name.current.value : "";
  const emailValue = email.current.value;
  const passwordValue = password.current.value;

  const message = CheckFormValidation(nameValue, emailValue, passwordValue, isSigned);
  setErrorMessage(message);

  if(message) return;

  if(!isSigned){
    //sing up logic
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: nameValue, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
   navigate("/Browse")
}).catch((error) => {
  setErrorMessage(error.message)
});
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
    // ..
  });

  }else{
   //sign in logic

   signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   navigate("/Browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
};


  const toggleLogin = () => {
     setIsSigned(!isSigned)
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <img
        src={BG_IMG}
        alt="background"
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 to-transparent"></div>

      {/* Header (overlayed) */}
      <Header />

      {/* Form (also overlayed) */}
      <form onSubmit={(e)=>e.preventDefault()} className="absolute top-1/2 left-1/2 w-11/12 md:w-3/12 bg-black/70 text-white p-10 rounded-lg transform -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="text-3xl font-bold my-4">{isSigned ? "Sign In": "Sign Up"}</h1>
        {
            !isSigned &&  <input
            ref={name}
          type="text"
          placeholder="Full Name"
          className="w-full p-3 my-4 bg-[rgb(16,16,16)] border border-gray-500  rounded-md"
        />
        }
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-3 my-4 bg-[rgb(16,16,16)] border border-gray-500 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 my-4 bg-[rgb(16,16,16)] border border-gray-500 rounded-md"
        />
        <p className="py-4 font-bold text-red-500">{errormessage}</p>
        <button className="w-full p-2 my-4 font-bold bg-red-500 cursor-pointer rounded-md" onClick={handleSubmitButton}>
          {isSigned ? "Sign In": "Sign Up"}
        </button>
        <p className="text-gray-300">
         {isSigned ? "New to Netflix?": "Already Registered?"}
          
          <span className="font-bold text-white hover:underline cursor-pointer" onClick={toggleLogin}>
            
            {isSigned ? "Sign up now.": "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
