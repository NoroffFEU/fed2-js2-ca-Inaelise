import { onRegister } from "../../ui/auth/register";
import { toggleDropdown } from "../../utilities/dropdownMenu";
import { toggleNavItems } from "../../utilities/toggleNavItems";

const form = document.forms.register;

form.addEventListener("submit", onRegister);

toggleDropdown();
toggleNavItems();
