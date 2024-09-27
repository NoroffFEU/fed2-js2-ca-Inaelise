import { API_AUTH_REGISTER } from "../constants";

/**
 * This will register a user by sending their information to Noroff's register API.
 * @param {Object} user This is the register parameters.
 * @param {string} user.name This is the name of the user
 * @param {string} user.email This is the user's email
 * @param {string} user.password This is the user's password
 * @param {string} user.bio This is the user's bio (optional)
 * @param {string} user.banner URL to the user's banner (optional)
 * @param {string} user.avatar URL to the user's avatar (optional)
 * @returns {Promise<Object>} The registered user data.
 * @example
 * const registerUser = await register({
 * name: "Kari Normann",
 * email: "kari.normann@stud.noroff.no",
 * password: "password123"
 * });
 * console.log(registerUser);
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
