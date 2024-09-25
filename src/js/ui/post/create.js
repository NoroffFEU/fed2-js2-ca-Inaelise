import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
  event.preventDefault();

  const createForm = event.target;
  const formData = new FormData(createForm);
  const data = Object.fromEntries(formData.entries());

  const media = {
    url: data.url,
    alt: "",
  };

  delete data.url;
  data.media = media;

  data.tags = data.tags.split(",").map((tag) => tag.trim());

  console.log(data);

  try {
    const newPost = await createPost(data);
    window.location.href = `/post/?id=${newPost.id}`;
  } catch (error) {
    alert("Error creating post: " + error.message);
  }
}
