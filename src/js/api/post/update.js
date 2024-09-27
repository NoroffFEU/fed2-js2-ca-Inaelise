import { API_SOCIAL_POSTS } from "../constants";
import { headers as getHeaders } from "../headers";

/**
 * This function will update a post with specific id in the API.
 * @param {number} id This is the id of the post.
 * @param {Object} postData the data to update the post with.
 * @param {string} postData.title This is the title of the post.
 * @param {string} postData.body This is the body of the post.
 * @param {Array<string>} postData.tags This is an array of tags for the post.
 * @param {Object} postData.media This is the media object for the post.
 * @param {string} postData.media.url This is the URL of the media for the post.
 * @param {string} postData.media.alt This is the alt text of the media for the post.
 * @returns {Object} The updated post data is returned.
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
