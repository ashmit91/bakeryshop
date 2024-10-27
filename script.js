function logProductClick(productName) {
  console.log(`Product clicked: ${productName}`);
}


function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log(`Form submitted: Name - ${name}, Email - ${email}, Message - ${message}`);

  // Show pop-up confirmation message
  alert(`Thank you, ${name}! Your message has been submitted successfully.`);
  document.querySelector('form').reset();
}
