import { onUpdateProfile } from "../../ui/profile/update";
import { authGuard } from "../../utilities/authGuard";

authGuard();

const form = document.forms.updateProfile;

form.addEventListener("submit", onUpdateProfile);
