import { readPosts } from "../../api/post/read";

let currentPage = 1;
const postsPerPage = 12;

/**
 * This function will display the list of posts on the home page.
 * @returns the unordered list of posts.
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
      link.title = "Go to post";

      const postContainer = document.createElement("div");
      postContainer.classList.add(
        "w-[280px]",
        "border-2",
        "border-main",
        "shadow-box",
        "break-words",
        "md:w-[300px]",
        "md:transition-all",
        "md:duration-500",
        "md:hover:scale-105"
      );

      const title = document.createElement("h2");
      title.textContent = post.title;
      title.classList.add("p-2", "text-center", "font-medium", "text-sm");

      if (post.media && post.media.url) {
        const img = document.createElement("img");
        img.src = post.media.url;
        img.alt = post.media.alt || "Post image";
        img.classList.add(
          "object-cover",
          "w-full",
          "h-[280px]",
          "md:h-[300px]"
        );
        postContainer.append(img, title);
      } else {
        const noImage = document.createElement("img");
        noImage.src = "/images/default-img.png";
        noImage.classList.add(
          "object-cover",
          "w-full",
          "h-[280px]",
          "md:h-[300px]"
        );
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
  const pageCount = document.getElementById("current-page");

  pageCount.textContent = currentPage;

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
