import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { toggleDropdown } from "../../utilities/dropdownMenu";

authGuard();
toggleDropdown();

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);
