import { onLogout } from "../auth/logout";

/**
 * This will logout the user when the button is clicked.
 * If confirmed, the user will logout. An alert message will pop up and the user will be redirected to the login page.
 * @example
 * // Call this function to set up the logout listener:
 * setLogoutListener();
 */
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
