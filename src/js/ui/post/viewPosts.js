import { readPosts } from "../../api/post/read";

let currentPage = 1;
const postsPerPage = 12;

/**
 * This function will display the list of posts on the home page.
 * @returns the list of posts if successful.
 */
export async function viewPosts() {
  try {
    const posts = await readPosts(postsPerPage, currentPage);

    const ul = document.getElementById("post-list");
    ul.innerHTML = "";

    posts.forEach((post) => {
      const listItem = document.createElement("li");

      const link = document.createElement("a");
      link.href = `/post/?id=${post.id}`;

      const postContainer = document.createElement("div");

      const title = document.createElement("h2");
      title.textContent = post.title;

      if (post.media && post.media.url) {
        const img = document.createElement("img");
        img.src = post.media.url;
        img.alt = post.media.alt || "Post image";
        postContainer.append(img, title);
      } else {
        const noImage = document.createElement("p");
        noImage.textContent = "No image available";
        postContainer.append(noImage, title);
      }

      link.append(postContainer);

      listItem.append(link);
      ul.append(listItem);
    });

    updatePaginationButtons(posts.length);
  } catch (error) {
    alert(error.message);
  }
}

/**
 * This function will update the pagination buttons based on the current page and number of posts.
 * @param {number} postCount the total number of posts retrieved.
 */
function updatePaginationButtons(postCount) {
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  prev.disabled = currentPage === 1;
  next.disabled = postCount < postsPerPage;
}

/**
 * This function will set up event listeners for the pagination buttons to navigate through pages.
 */
export function setupPagination() {
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  prev.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      viewPosts();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  next.addEventListener("click", () => {
    currentPage++;
    viewPosts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
