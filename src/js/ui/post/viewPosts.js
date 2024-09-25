import { readPosts } from "../../api/post/read";

let currentPage = 1;
const postsPerPage = 12;

export async function viewPosts() {
  try {
    const posts = await readPosts(postsPerPage, currentPage);

    const ul = document.getElementById("post-list");
    ul.innerHTML = "";

    posts.forEach((post) => {
      const listItem = document.createElement("li");

      const link = document.createElement("a");
      link.href = `/post/?id=${post.id}`;

      if (post.media && post.media.url) {
        const img = document.createElement("img");
        img.src = post.media.url;
        img.alt = post.media.alt || "Post image";
        link.appendChild(img);
      } else {
        const placeholder = document.createElement("p");
        placeholder.innerText = "No image available";
        link.appendChild(placeholder);
      }

      listItem.appendChild(link);
      ul.appendChild(listItem);
    });

    updatePaginationButtons(posts.length);
  } catch (error) {
    alert(error.message);
  }
}

function updatePaginationButtons(postCount) {
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  prev.disabled = currentPage === 1;
  next.disabled = postCount < postsPerPage;

  console.log(currentPage);
}

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
