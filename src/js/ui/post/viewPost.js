import { readPost } from "../../api/post/read";
import { activePostId } from "../../utilities/activePostId";
import { onDeletePost } from "./delete";

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
    tags.innerText = post.tags.join(", ");

    const editBtn = document.createElement("a");
    editBtn.href += post.id;
    editBtn.innerText = "Edit post";
    //Add onclick event

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.postId = post.id;
    deleteBtn.addEventListener("click", onDeletePost);

    postContainer.append(img, title, body, tags, editBtn, deleteBtn);
    return postContainer;
  } catch (error) {
    alert(error);
    /* window.location.href = "/"; */
  }
}
