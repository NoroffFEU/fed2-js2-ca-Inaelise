import { readProfile } from "../../api/profile/read";
import { activeUser } from "../../utilities/activeUser";

/**
 * This function will display the data of the user profile.
 * @returns the profile container element.
 */
export async function viewProfile() {
  const user = activeUser();
  try {
    const profile = await readProfile(user.name);

    const profileContainer = document.getElementById("profile-container");

    const img = document.createElement("img");
    img.src = profile.avatar.url;

    const userName = document.createElement("h2");
    userName.textContent = profile.name;

    const bio = document.createElement("p");
    bio.textContent = profile.bio;

    const postCount = document.createElement("p");
    postCount.textContent = `Total posts: ${profile._count.posts}`;

    const editBtn = document.createElement("a");
    editBtn.href = "/profile/edit/";
    editBtn.textContent = "Update profile";
    editBtn.classList.add("edit-btn");

    profileContainer.append(img, userName, bio, postCount, editBtn);

    return profileContainer;
  } catch (error) {
    alert(error.message);
  }
}
