import { onLogin } from "../../ui/auth/login";
import { toggleDropdown } from "../../utilities/dropdownMenu";
import { setLogoutListener } from "../../ui/global/logout";
import { toggleNavItems } from "../../utilities/toggleNavItems";

const form = document.forms.login;

form.addEventListener("submit", onLogin);

toggleDropdown();
toggleNavItems();
setLogoutListener();
