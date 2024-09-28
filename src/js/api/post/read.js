import { API_SOCIAL_POSTS } from "../constants";
import { headers as getHeaders } from "../headers";

/**
 * This function will fetch a post by its id from the API.
 * @param {number} id the id of the post that will be fetched.
 * @returns {Object} the post data.
 */
export async function readPost(id) {
  const url = `${API_SOCIAL_POSTS}/${id}`;

  const token = localStorage.getItem("token");

  const requestHeaders = getHeaders(token);

  const response = await fetch(url, {
    headers: requestHeaders,
  });

  const result = await response.json();

  if (response.ok) {
    const { data } = result;
    return data;
  }
  const error = result.errors.map((error) => error.message).join("\r\n");
  throw new Error(error);
}

/**
 * This function will fetch a list of posts from the API.
 * @param {number} limit the maximum number of posts to retrieve. Defaults to 12.
 * @param {number} page the page number to retrieve. Defaults to 1.
 * @returns an array of post data.
 */
export async function readPosts(limit = 12, page = 1) {
  const url = new URL(API_SOCIAL_POSTS);

  const token = localStorage.getItem("token");

  const requestHeaders = getHeaders(token);

  url.searchParams.append("limit", limit);
  url.searchParams.append("page", page);

  const response = await fetch(url, {
    headers: requestHeaders,
  });

  const result = await response.json();

  if (response.ok) {
    const { data } = result;
    return data;
  }
  const error = result.errors.map((error) => error.message).join("\r\n");
  throw new Error(error);
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
