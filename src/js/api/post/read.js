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

  if (response.ok) {
    const { data } = await response.json();
    return data;
  }
  throw new Error(`Could not fetch post with id: ${id}`);
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

  if (response.ok) {
    const { data } = await response.json();
    return data;
  }

  throw new Error("Could not fetch posts");
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
