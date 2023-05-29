const togglePassword3 = document.querySelector('#togglePassword3');
const password3 = document.querySelector('#password3');

togglePassword3.addEventListener('click', function () {
  togglePasswordVisibility(password3, togglePassword3);
});

function togglePasswordVisibility(passwordInput, toggleIcon) {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  toggleIcon.classList.toggle('fa-eye-slash');
}
