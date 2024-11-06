import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { viewPosts, setupPagination } from "../../ui/post/viewPosts";
import { toggleDropdown } from "../../utilities/dropdownMenu";

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "/auth/login/";
} else {
  authGuard();
  viewPosts();
  setupPagination();
  setLogoutListener();
  toggleDropdown();
}
