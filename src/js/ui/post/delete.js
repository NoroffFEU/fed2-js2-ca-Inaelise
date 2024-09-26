import { deletePost } from "../../api/post/delete";

/**
 * This function will handle the delete post event when triggered by the delete button.
 * @param {*} event delete post on button click.
 * @returns If successful, an alert message pops up and the user is redirected to the home page. If unsuccessfull, an error alert message pops up.
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
