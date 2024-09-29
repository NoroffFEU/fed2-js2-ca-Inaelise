import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";
import { populateEditForm } from "../../utilities/populateForm";

authGuard();

const form = document.forms.editPost;

form.addEventListener("submit", onUpdatePost);
populateEditForm();
