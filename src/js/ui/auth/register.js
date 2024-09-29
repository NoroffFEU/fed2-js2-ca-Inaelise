import { register } from "../../api/auth/register";

/**
 * This function will handle the register form submission event.
 * @param {Event} event registers user on submit.
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
