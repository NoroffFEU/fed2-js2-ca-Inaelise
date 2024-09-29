import { readPost } from "../api/post/read";
import { readProfile } from "../api/profile/read";
import { activePostId } from "./activePostId";
import { activeUser } from "./activeUser";

/**
 * This function will populate the form fields with the existing data.
 */
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

export async function populateProfileForm() {
  const user = activeUser();

  try {
    const profile = await readProfile(user.name);

    const form = document.forms.updateProfile;

    form["url"].value = profile.avatar?.url || "";
    form["bio"].value = profile.bio || "";
  } catch (error) {
    alert("Error loading profile data to input fields.");
  }
}
