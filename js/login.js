const togglePassword1 = document.querySelector('#togglePassword1');
const togglePassword2 = document.querySelector('#togglePassword2');
const togglePassword3 = document.querySelector('#togglePassword3');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const password3 = document.querySelector('#password3');

togglePassword1.addEventListener('click', function () {
  togglePasswordVisibility(password1, togglePassword1);
});

togglePassword2.addEventListener('click', function () {
  togglePasswordVisibility(password2, togglePassword2);
});

togglePassword3.addEventListener('click', function () {
  togglePasswordVisibility(password3, togglePassword3);
});

function togglePasswordVisibility(passwordInput, toggleIcon) {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  toggleIcon.classList.toggle('fa-eye-slash');
}
