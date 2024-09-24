import { API_AUTH_REGISTER } from "../constants";

/**
 * This will register a user account in Noroff's API
 * @param {string} name This is the name of the user
 * @param {string} email This is the user's email
 * @param {string} password This is the user's password
 * @param {string} bio This is the user's bio
 * @param {string} banner This is the user's banner
 * @param {string} avatar This is the user's avatar
 * @returns {object} The register data is returned
 */
export async function register({ name, email, password, bio, banner, avatar }) {
  const response = await fetch(API_AUTH_REGISTER, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ name, email, password, bio, banner, avatar }),
  });

  if (response.ok) {
    const { data } = await response.json();
    return data;
  }

  throw new Error("Could not register this account");
}
