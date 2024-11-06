import { onRegister } from "../../ui/auth/register";
import { toggleDropdown } from "../../utilities/dropdownMenu";

const form = document.forms.register;

form.addEventListener("submit", onRegister);

toggleDropdown();
