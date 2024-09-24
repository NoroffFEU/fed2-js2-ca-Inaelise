import { register } from "../../api/auth/register";

/**
 * This takes the entries from the register form to make a user account with the register function
 * @param {*} event registers user on submit
 * @returns {string} if successful an alert message pops up and the user is redirected to the login page, if unsuccessful an error message pops up
 */
export async function onRegister(event) {
  event.preventDefault();
  const registerForm = event.target;
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData.entries());

  try {
    await register(data);
    alert("Thank you for registering!");
    window.location.href = "/auth/login/";
  } catch (error) {
    alert(error);
  }
}
