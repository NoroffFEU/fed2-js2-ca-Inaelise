import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";
import { viewPosts, setupPagination } from "../../ui/post/viewPosts";

authGuard();
viewPosts();
setupPagination();
setLogoutListener();
