import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";
import { toggleDropdown } from "../../utilities/dropdownMenu";
import { populateEditForm } from "../../utilities/populateForm";
import { toggleNavItems } from "../../utilities/toggleNavItems";

authGuard();

const form = document.forms.editPost;

form.addEventListener("submit", onUpdatePost);
populateEditForm();
toggleDropdown();
toggleNavItems();
