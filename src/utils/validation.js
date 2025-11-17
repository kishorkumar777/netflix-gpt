const CheckFormValidation = (name, email, password, isSigned) => {
  if (!isSigned) { 
    const nameValidation = /^[A-Za-z]+(?:[ -'][A-Za-z]+)*$/.test(name);
    if (!nameValidation) return "Please Enter a valid name";
  }

  const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const passwordValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

  if (!emailValidation) return "Email Id is not valid";
  if (!passwordValidation) return "Password is not valid";

  return null;
};

export default CheckFormValidation;