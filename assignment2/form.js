const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const id = document.getElementById("id").value;
  
  const nameRegExp = /^\S*$/;
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  const dobRegExp = /^(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-[0-9]{4}$/;
  
  if (!nameRegExp.test(name)) {
    alert("Name should not contain spaces");
  } else if (!emailRegExp.test(email)) {
    alert("Invalid email address");
  } else if (!passwordRegExp.test(password)) {
    alert("Password should contain at least one letter, one number, and one special character and should be at least 8 characters long");
  } else if (!dobRegExp.test(dob)) {
    alert("Invalid date of birth format");
  } else {
    alert("Form submitted successfully");
  }
});
