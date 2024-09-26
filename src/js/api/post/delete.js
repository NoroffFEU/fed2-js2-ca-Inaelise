import { API_SOCIAL_POSTS } from "../constants";
import { headers as getHeaders } from "../headers";

/**
 * This function will delete a post by its ID.
 * @param {number} id the id of the post.
 * @returns if successful an alert pops up and it returns true. If unsuccessful an error is thrown.
 */
export async function deletePost(id) {
  const url = `${API_SOCIAL_POSTS}/${id}`;

  const token = localStorage.getItem("token");

  const requestHeaders = getHeaders(token);

  const response = await fetch(url, {
    headers: requestHeaders,
    method: "DELETE",
  });

  if (response.ok) {
    alert("Post deleted!");
    return true;
  }

  throw new Error("Could not delete post");
}
