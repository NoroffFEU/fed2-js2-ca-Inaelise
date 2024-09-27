import { readPost } from "../../api/post/read";
import { activePostId } from "../../utilities/activePostId";
import { onDeletePost } from "./delete";

/**
 * This function will display the data of a single post on the page.
 * @returns the post container element if successful. If unsuccessful, an error alert message pops up.
 */
export async function viewPost() {
  const postId = activePostId();

  try {
    const post = await readPost(postId);

    const postContainer = document.getElementById("post-container");

    const img = document.createElement("img");
    img.src = post.media.url;

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    const tags = document.createElement("p");
    tags.textContent = `Tags: ${post.tags.join(", ")}`;

    const editBtn = document.createElement("a");
    editBtn.href = `/post/edit/?id=${postId}`;
    editBtn.textContent = "Edit post";
    editBtn.classList.add("edit-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.postId = post.id;
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", onDeletePost);

    postContainer.append(img, title, body, tags, editBtn, deleteBtn);

    return postContainer;
  } catch (error) {
    alert(error.message);
    window.location.href = "/";
  }
}
