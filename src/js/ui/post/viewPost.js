import { deletePost } from "../../api/post/delete";
import { readPost } from "../../api/post/read";
import { activePostId } from "../../utilities/activePostId";

export async function viewPost() {
  const postId = activePostId();

  try {
    const post = await readPost(postId);

    const postContainer = document.getElementById("post-container");

    const img = document.createElement("img");
    img.src = post.media.url;

    const title = document.createElement("p");
    title.innerText = post.title;

    const tags = document.createElement("p");
    tags.innerText = post.tags.join(", ");

    const editBtn = document.createElement("a");
    editBtn.href += post.id;
    editBtn.innerText = "Edit post";
    //Add onclick event

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = async () => {
      try {
        const userConfirm = window.confirm(
          "Are you sure you want to delete this post?"
        );
        if (userConfirm) {
          await deletePost(post.id);
          window.location.href = "/";
        }
      } catch (error) {
        alert(error.message);
      }
    };

    postContainer.append(img, title, tags, editBtn, deleteBtn);
    return postContainer;
  } catch (error) {
    alert(error);
    /* window.location.href = "/"; */
  }
}
