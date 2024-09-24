import { API_AUTH_LOGIN } from "../constants";

/**
 * This will login a user by sending the email and password to the authentication API.
 * If successful, it stores the access token and user data in local storage.
 * @param {string} email This is the user's email
 * @param {string} password This is the user's password
 * @returns {object} The login data (access token and user) is returned
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
