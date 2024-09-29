import { readPost } from "../../api/post/read";
import { activePostId } from "../../utilities/activePostId";
import { onDeletePost } from "./delete";
import { likePost } from "../../api/post/reaction";

/**
 * This function will display the data of a single post on the page.
 * @returns the post container element.
 */
export async function viewPost() {
  const postId = activePostId();

  try {
    const post = await readPost(postId);

    const postContainer = document.getElementById("post-container");

    if (post.media && post.media.url) {
      const img = document.createElement("img");
      img.src = post.media.url;
      img.alt = post.media.alt || "Post image";
      postContainer.appendChild(img);
    }

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    const tags = document.createElement("p");
    tags.textContent = `Tags: ${post.tags.join(", ")}`;

    const likes = document.createElement("p");
    likes.id = "like-count";
    likes.textContent = `Likes: ${post._count.reactions}`;

    const likeBtn = document.createElement("button");
    likeBtn.id = "like-btn";
    likeBtn.textContent = "👍";
    likeBtn.addEventListener("click", async () => {
      try {
        await likePost(postId);
        const updatedPost = await readPost(postId);
        likes.textContent = `Likes: ${updatedPost._count.reactions}`;
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    });

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    const editBtn = document.createElement("a");
    editBtn.href = `/post/edit/?id=${postId}`;
    editBtn.textContent = "Edit post";
    editBtn.classList.add("edit-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.postId = post.id;
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", onDeletePost);

    btnContainer.append(editBtn, deleteBtn);
    postContainer.append(title, body, tags, likes, likeBtn, btnContainer);

    return postContainer;
  } catch (error) {
    alert(error.message);
    window.location.href = "/";
  }
}
