import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { toggleDropdown } from "../../utilities/dropdownMenu";
import { toggleNavItems } from "../../utilities/toggleNavItems";

authGuard();
toggleDropdown();
toggleNavItems();

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);
