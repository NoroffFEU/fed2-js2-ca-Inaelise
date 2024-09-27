/**
 * This function will remove the access token and user data in local storage.
 * It is a helper function for the function setLogoutListener().
 *  @example
 * // Call the logout function to remove the data:
 * onLogout();
 */
export function onLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
