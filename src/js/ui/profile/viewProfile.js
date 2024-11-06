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
    img.classList.add("rounded-full", "w-[200px]");

    const userName = document.createElement("h2");
    userName.textContent = profile.name;

    const bio = document.createElement("p");
    bio.textContent = profile.bio;

    const otherInfo = document.createElement("div");
    otherInfo.classList.add("flex", "gap-8", "text-center", "py-8");

    const postCountDiv = document.createElement("div");
    postCountDiv.classList.add("flex", "flex-col");

    const postCount = document.createElement("p");
    postCount.textContent = profile._count.posts;

    const postCountText = document.createElement("p");
    postCountText.textContent = "Posts";

    const followerCountDiv = document.createElement("div");
    followerCountDiv.classList.add("flex", "flex-col");

    const followerCount = document.createElement("p");
    followerCount.textContent = profile._count.followers;

    const followerCountText = document.createElement("p");
    followerCountText.textContent = "Followers";

    const followingCountDiv = document.createElement("div");
    followingCountDiv.classList.add("flex", "flex-col");

    const followingCount = document.createElement("p");
    followingCount.textContent = profile._count.following;

    const followingCountText = document.createElement("p");
    followingCountText.textContent = "Following";

    const editBtn = document.createElement("a");
    editBtn.href = "/profile/edit/";
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    followingCountDiv.append(followingCount, followingCountText);

    followerCountDiv.append(followerCount, followerCountText);

    postCountDiv.append(postCount, postCountText);

    otherInfo.append(postCountDiv, followerCountDiv, followingCountDiv);

    profileContainer.append(img, userName, bio, otherInfo, editBtn);

    return profileContainer;
  } catch (error) {
    alert(error.message);
  }
}
