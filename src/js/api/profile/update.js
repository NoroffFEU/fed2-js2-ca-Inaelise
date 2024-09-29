import { API_SOCIAL_PROFILES } from "../constants";
import { headers as getHeaders } from "../headers";

/**
 * This function will update the profile in the API of the logged in user.
 * @param {string} username this is the user's name.
 * @param {object} avatar this is the avatar object for the user profile.
 * @param {string} bio this is the bio of the user profile.
 * @returns {object} the updated profile data is returned.
 */
export async function updateProfile(username, { avatar, bio }) {
  const url = `${API_SOCIAL_PROFILES}/${username}`;
  const token = localStorage.getItem("token");

  const requestHeaders = getHeaders(token);

  const response = await fetch(url, {
    headers: requestHeaders,
    method: "PUT",
    body: JSON.stringify({ avatar, bio }),
  });

  if (response.ok) {
    const { data } = await response.json();
    alert("Profile updated!");
    return data;
  }

  throw new Error(`Could not update profile with username: ${username}`);
}
