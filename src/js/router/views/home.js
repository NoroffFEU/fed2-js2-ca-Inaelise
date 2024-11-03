import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { viewPosts, setupPagination } from "../../ui/post/viewPosts";
import { toggleDropdown } from "../../utilities/dropdownMenu";

authGuard();
viewPosts();
setupPagination();
setLogoutListener();
toggleDropdown();
