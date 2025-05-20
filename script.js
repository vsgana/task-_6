function submitForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent.");
  } else {
    alert("Please fill out all fields.");
  }

  // Prevent page refresh
  return false;
}
