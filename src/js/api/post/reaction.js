import { API_SOCIAL_POSTS } from "../constants";
import { headers as getHeaders } from "../headers";

/**
 * This function will update the like reaction data.
 * @param {number} postId the if of the post to like to.
 * @param {string} symbol the reaction symbol for the post.
 * @returns {Promise<Object>} updates the reaction data if successful.
 */
export async function likePost(postId, symbol = "👍") {
  const url = `${API_SOCIAL_POSTS}/${postId}/react/${symbol}`;
  const token = localStorage.getItem("token");
  const requestHeaders = getHeaders(token);

  const response = await fetch(url, {
    method: "PUT",
    headers: requestHeaders,
    body: JSON.stringify({
      postId,
      symbol,
    }),
  });

  if (!response.ok) {
    const result = await response.json();
    const error = result.errors.map((error) => error.message).join("\r\n");
    throw new Error(error);
  }

  const result = await response.json();
  return result.data;
}
