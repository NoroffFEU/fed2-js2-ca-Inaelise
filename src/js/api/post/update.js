import { API_SOCIAL_POSTS } from "../constants";
import { headers as getHeaders } from "../headers";

/**
 * This function will update a post with specific id in the API.
 * @param {number} id This is the id of the post
 * @param {string} title This is the title of the post
 * @param {string} body This is the body of the post
 * @param {string} tags This is an array of tags for the post
 * @param {object} media This is the media object for the post
 * @returns {object} The updated post data is returned
 */
export async function updatePost(id, { title, body, tags, media }) {
  const url = `${API_SOCIAL_POSTS}/${id}`;
  const token = localStorage.getItem("token");

  const requestHeaders = getHeaders(token);

  const response = await fetch(url, {
    headers: requestHeaders,
    method: "PUT",
    body: JSON.stringify({ title, body, tags, media }),
  });

  if (response.ok) {
    const { data } = await response.json();
    alert("Post updated!");
    return data;
  }

  throw new Error(`Could not update post with id: ${id}`);
}
