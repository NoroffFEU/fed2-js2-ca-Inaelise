import { authGuard } from "../../utilities/authGuard";
import { viewProfile } from "../../ui/profile/viewProfile";
import { toggleDropdown } from "../../utilities/dropdownMenu";
import { toggleNavItems } from "../../utilities/toggleNavItems";

authGuard();
toggleDropdown();
toggleNavItems();
viewProfile();
