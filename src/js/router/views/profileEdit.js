import { onUpdateProfile } from "../../ui/profile/update";
import { authGuard } from "../../utilities/authGuard";
import { populateProfileForm } from "../../utilities/populateForm";

authGuard();

const form = document.forms.updateProfile;

form.addEventListener("submit", onUpdateProfile);
populateProfileForm();
