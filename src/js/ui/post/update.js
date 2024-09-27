import { updatePost } from "../../api/post/update";
import { activePostId } from "../../utilities/activePostId";

/**
 * This function will handle the form submission for updating a post.
 * @param {Event} event updates post on submit.
 */
export async function onUpdatePost(event) {
  event.preventDefault();

  const postId = activePostId();

  const updateForm = event.target;
  const formData = new FormData(updateForm);
  const data = Object.fromEntries(formData.entries());

  const media = {
    url: data.url,
    alt: "",
  };

  delete data.url;
  data.media = media;

  data.tags = data.tags.split(",").map((tag) => tag.trim());

  try {
    await updatePost(postId, data);
    window.location.href = `/post/?id=${postId}`;
  } catch (error) {
    alert("Error updating post: " + error.message);
  }
}
