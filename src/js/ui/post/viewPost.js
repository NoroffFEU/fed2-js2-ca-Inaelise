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

    const author = document.createElement("div");
    author.classList.add(
      "flex",
      "flex-row",
      "items-center",
      "justify-center",
      "gap-3",
      "py-4"
    );

    const userAvatar = document.createElement("img");
    userAvatar.src = post.author.avatar.url;
    userAvatar.alt = post.author.avatar.alt || "User avatar";
    userAvatar.classList.add("w-[35px]", "rounded-full");

    const userName = document.createElement("p");
    userName.textContent = post.author.name;
    userName.classList.add("text-xs", "font-semibold");

    author.append(userAvatar, userName);

    if (post.media && post.media.url) {
      const img = document.createElement("img");
      img.src = post.media.url;
      img.alt = post.media.alt || "Post image";
      postContainer.append(author, img);
    }

    const likeContainer = document.createElement("div");
    likeContainer.classList.add("flex", "gap-1", "p-2", "items-center");

    const likeBtn = document.createElement("button");
    likeBtn.id = "like-btn";
    likeBtn.innerHTML = "<i class='fa-solid fa-heart fa-xl'></i>";
    likeBtn.classList.add(
      "text-secondary",
      "hover:text-white",
      "hover:drop-shadow"
    );
    likeBtn.addEventListener("click", async () => {
      try {
        await likePost(postId);
        const updatedPost = await readPost(postId);
        likes.textContent = updatedPost._count.reactions;
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    });

    const likes = document.createElement("p");
    likes.id = "like-count";
    likes.textContent = post._count.reactions;
    likes.classList.add("font-bold", "text-sm");

    const textContainer = document.createElement("div");
    textContainer.classList.add("py-2", "px-3", "flex", "flex-col", "gap-4");

    const title = document.createElement("h2");
    title.textContent = post.title;
    title.classList.add("font-semibold");

    const body = document.createElement("p");
    body.textContent = post.body;
    body.classList.add("text-sm");

    const tags = document.createElement("p");
    tags.textContent = post.tags.join(", ");
    tags.classList.add("text-xs", "text-faded");

    const btnContainer = document.createElement("div");
    btnContainer.classList.add(
      "btn-container",
      "flex",
      "gap-10",
      "justify-center",
      "py-8"
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.postId = post.id;
    deleteBtn.classList.add(
      "delete-btn",
      "btn",
      "border",
      "p-2",
      "border-faded",
      "w-[100px]",
      "hover:shadow-spread",
      "hover:scale-105",
      "transition-all",
      "duration-300",
      "ease-in-out"
    );
    deleteBtn.addEventListener("click", onDeletePost);

    const editBtn = document.createElement("a");
    editBtn.href = `/post/edit/?id=${postId}`;
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn", "btn", "primary");

    textContainer.append(title, body, tags);
    likeContainer.append(likeBtn, likes);
    btnContainer.append(deleteBtn, editBtn);
    postContainer.append(likeContainer, textContainer, btnContainer);

    return postContainer;
  } catch (error) {
    alert(error.message);
    window.location.href = "/";
  }
}
