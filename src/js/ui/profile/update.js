import { updateProfile } from "../../api/profile/update";
import { activeUser } from "../../utilities/activeUser";

/**
 * This function will handle the form submission for updating a profile.
 * @param {*} event updates profile on submit.
 * @returns If successful profile is updated and redirects the user to the profile page. If unsuccessful an error alert message pops up.
 */
export async function onUpdateProfile(event) {
  event.preventDefault();
  const user = activeUser();

  const updateForm = event.target;
  const formData = new FormData(updateForm);
  const data = Object.fromEntries(formData.entries());

  const media = {
    url: data.url,
    alt: "",
  };

  delete data.url;
  data.media = media;

  try {
    await updateProfile(user.name, data);
    window.location.href = "/profile/";
  } catch (error) {
    alert("Error updating profile: " + error.message);
  }
}
