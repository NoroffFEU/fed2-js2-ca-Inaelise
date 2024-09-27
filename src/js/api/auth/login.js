import { API_AUTH_LOGIN } from "../constants";

/**
 * This will login a user by sending the email and password to the authentication API.
 * If successful, it stores the access token and user data in local storage.
 * @param {Object} user This is the login parameters.
 * @param {string} user.email This is the user's email.
 * @param {string} user.password This is the user's password.
 * @returns {Promise<Object>} The logged-in user data.
 * @example
 * const user = await login({ email: "example@stud.noroff.no", password: "example123" });
 * console.log(user);
 */
export async function login({ email, password }) {
  const response = await fetch(API_AUTH_LOGIN, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { data } = await response.json();
    const { accessToken: token, ...user } = data;
    localStorage.token = token;
    localStorage.user = JSON.stringify(user);
    return data;
  }

  throw new Error("Could not login with this account");
}
