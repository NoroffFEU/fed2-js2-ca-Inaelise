import { onLogout } from "../auth/logout";

export function setLogoutListener() {
  const logoutBtn = document.querySelector(".logout-btn");

  logoutBtn.addEventListener("click", () => {
    if (window.confirm("Are you sure you want to logout?") === true) {
      onLogout();
      alert("You've logged out!");
      window.location.href = "/auth/login/";
    }
  });
}
