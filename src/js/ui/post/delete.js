import { deletePost } from "../../api/post/delete";

/**
 * This function will handle the delete post event when triggered by the delete button.
 * @param {Event} event delete post on button click.
 */
export async function onDeletePost(event) {
  event.preventDefault();

  const postId = event.target.dataset.postId;

  try {
    const userConfirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (userConfirm) {
      await deletePost(postId);
      window.location.href = "/";
    }
  } catch (error) {
    alert(error.message);
  }
}
