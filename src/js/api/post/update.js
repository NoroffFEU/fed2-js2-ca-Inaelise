import { API_SOCIAL_POSTS } from "../constants";
import { headers as getHeaders } from "../headers";

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
