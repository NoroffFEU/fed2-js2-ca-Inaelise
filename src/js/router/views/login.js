import { onLogin } from "../../ui/auth/login";
import { toggleDropdown } from "../../utilities/dropdownMenu";

const form = document.forms.login;

form.addEventListener("submit", onLogin);

toggleDropdown();
