import { onUpdateProfile } from "../../ui/profile/update";
import { authGuard } from "../../utilities/authGuard";
import { toggleDropdown } from "../../utilities/dropdownMenu";
import { populateProfileForm } from "../../utilities/populateForm";
import { toggleNavItems } from "../../utilities/toggleNavItems";

authGuard();

const form = document.forms.updateProfile;

form.addEventListener("submit", onUpdateProfile);
populateProfileForm();
toggleDropdown();
toggleNavItems();
