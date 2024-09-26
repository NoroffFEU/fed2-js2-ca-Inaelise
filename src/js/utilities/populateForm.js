import { readPost } from "../api/post/read";
import { activePostId } from "./activePostId";

export async function populateEditForm() {
  const postId = activePostId();

  try {
    const post = await readPost(postId);

    const form = document.forms.editPost;

    form["title"].value = post.title || "";
    form["body"].value = post.body || "";
    form["url"].value = post.media?.url || "";
    form["tags"].value = post.tags ? post.tags.join(", ") : "";
  } catch (error) {
    alert("Error loading post data to input fields.");
  }
}
