export function activePostId() {
  const url = new URL(window.location.href);
  return url.searchParams.get("id");
}
