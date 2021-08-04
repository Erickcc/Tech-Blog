const postFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#comment-box").value.trim();
  const postID = window.location.href.split("/")?.pop();
  if (comment && postID) {
    const response = await fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({ comment, postID }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to post comment.");
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", postFormHandler);
