import { onLogin } from "../../ui/auth/login";
import { toggleDropdown } from "../../utilities/dropdownMenu";
import { setLogoutListener } from "../../ui/global/logout";

const form = document.forms.login;

form.addEventListener("submit", onLogin);

toggleDropdown();
setLogoutListener();
