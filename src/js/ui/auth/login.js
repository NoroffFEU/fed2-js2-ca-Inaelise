import { login } from "../../api/auth/login";

/**
 * This takes the entries from the login form and attempts to login a user.
 * @param {*} event logs in user on submit
 * @returns {string} if successful an alert message pops up and the user is redirected to the home page, if unsuccessful an error message pops up
 */
export async function onLogin(event) {
  event.preventDefault();
  const loginForm = event.target;
  const formData = new FormData(loginForm);
  const data = Object.fromEntries(formData.entries());

  try {
    await login(data);
    alert("You're logged in!");
    window.location.href = "/";
  } catch (error) {
    alert(error);
  }
}
