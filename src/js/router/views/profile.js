import { authGuard } from "../../utilities/authGuard";
import { viewProfile } from "../../ui/profile/viewProfile";
import { toggleDropdown } from "../../utilities/dropdownMenu";

authGuard();
toggleDropdown();
viewProfile();
