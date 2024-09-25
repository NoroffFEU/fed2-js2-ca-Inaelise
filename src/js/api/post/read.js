import { API_SOCIAL_POSTS } from "../constants";
import { headers as getHeaders } from "../headers";

export async function readPost(id) {
  const url = `${API_SOCIAL_POSTS}/${id}`;

  const token = localStorage.getItem("token");

  const requestHeaders = getHeaders(token);

  const response = await fetch(url, {
    headers: requestHeaders,
  });

  if (response.ok) {
    const { data } = await response.json();
    console.log(data);
    return data;
  }
  throw new Error(`Could not fetch post with id: ${id}`);
}

export async function readPosts(limit = 12, page = 1, tag) {}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
