import { API_SOCIAL_POSTS } from "../constants";
import { headers as getHeaders } from "../headers";

export async function createPost({ title, tags, media }) {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No authorization token found. Please log in.");
  }

  const requestHeaders = getHeaders(token);

  const response = await fetch(API_SOCIAL_POSTS, {
    headers: requestHeaders,
    method: "POST",
    body: JSON.stringify({ title, tags, media }),
  });

  if (response.ok) {
    const { data } = await response.json();
    alert("post created!");
    return data;
  }

  throw new Error("Could not create post");
}
