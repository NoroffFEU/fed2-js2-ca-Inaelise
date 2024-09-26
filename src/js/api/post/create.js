import { API_SOCIAL_POSTS } from "../constants";
import { headers as getHeaders } from "../headers";

/**
 * This function will create a new post by sending a POST request to the API.
 * @param {string} title This is the title of the post
 * @param {string} body This is the body of the post
 * @param {string} tags This is an array of tags for the post
 * @param {object} media This is the media object for the post
 * @returns {object} The data for the created post is returned
 * @example
 * const newPost = {
 *  title: "New post"
 *  body: "This is a new post",
 *  tags: ["new", "tech"],
 *  media: { url:"https://example.com/image.jpg", alt: "An example image" }
 * };
 */
export async function createPost({ title, body, tags, media }) {
  const token = localStorage.getItem("token");

  const requestHeaders = getHeaders(token);

  const response = await fetch(API_SOCIAL_POSTS, {
    headers: requestHeaders,
    method: "POST",
    body: JSON.stringify({ title, body, tags, media }),
  });

  if (response.ok) {
    const { data } = await response.json();
    alert("post created!");
    return data;
  }

  throw new Error("Could not create post");
}
