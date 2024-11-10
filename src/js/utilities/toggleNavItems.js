import { activeUser } from "./activeUser";

export function toggleNavItems() {
  const home = document.getElementById("home-nav");
  const profile = document.getElementById("profile-nav");
  const create = document.getElementById("create-nav");
  const login = document.getElementById("login-nav");
  const signup = document.getElementById("signup-nav");
  const logout = document.querySelector(".logout-btn");

  const user = activeUser();

  if (user) {
    home.style.display = "inline-block";
    profile.style.display = "inline-block";
    create.style.display = "inline-block";
    logout.style.display = "inline-block";
    login.style.display = "none";
    signup.style.display = "none";
  } else {
    home.style.display = "none";
    profile.style.display = "none";
    create.style.display = "none";
    logout.style.display = "none";
    login.style.display = "inline-block";
    signup.style.display = "inline-block";
  }
}
