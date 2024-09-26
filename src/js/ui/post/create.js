import { createPost } from "../../api/post/create";

/**
 * This function will handle the form submission for creating a post.
 * @param {*} event creates post on submit
 * @returns If successfull post is created and redirects the user to the post page. If unsuccessful an error alert message pops up.
 */
export async function onCreatePost(event) {
  event.preventDefault();

  const createForm = event.target;
  const formData = new FormData(createForm);
  const data = Object.fromEntries(formData.entries());

  const media = {
    url: data.url,
    alt: "",
  };

  delete data.url;
  data.media = media;

  data.tags = data.tags.split(",").map((tag) => tag.trim());

  try {
    const newPost = await createPost(data);
    window.location.href = `/post/?id=${newPost.id}`;
  } catch (error) {
    alert("Error creating post: " + error.message);
  }
}
