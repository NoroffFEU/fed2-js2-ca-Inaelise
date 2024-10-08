import { API_SOCIAL_POSTS } from "../constants";
import { headers as getHeaders } from "../headers";

/**
 * This function will create a new post by sending a POST request to the API.
 * @param {Object} postData The data for the new post.
 * @param {string} postData.title This is the title of the post.
 * @param {string} postData.body This is the body of the post.
 * @param {Array<string>} postData.tags This is an array of tags for the post.
 * @param {Object} postData.media This is the media object for the post.
 * @param {string} postData.media.url This is the URL of the media for the post.
 * @param {string} postData.media.alt This is the alt text of the media for the post.
 * @returns {Object} The data for the created post is returned.
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

  const result = await response.json();

  if (response.ok) {
    const { data } = result;
    alert("Post created!");
    return data;
  }

  const errorMessage = result.errors.map((error) => error.message).join("\r\n");

  throw new Error(errorMessage);
}
