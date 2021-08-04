const updateFormHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const button = document.activeElement.value;
  const title = document.querySelector("#title-box").value.trim();
  const content = document.querySelector("#content-box").value.trim();
  const postID = Number(
    window.location.href
      .split("/")
      ?.pop()
      .match(/(?<=post=)(.*)/)[0]
  );

  //   console.log(button, title, content, postID);
  if (button === "update") {
    if (content && title && postID) {
      const response = await fetch("/api/posts/", {
        method: "PUT",
        body: JSON.stringify({ title, content, postID }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/dashboard/");
      } else {
        alert("Failed to update the post.");
      }
    }
  } else if (button === "delete") {
    const response = await fetch("/api/posts/", {
      method: "DELETE",
      body: JSON.stringify({postID}),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert("Failed to update the post.");
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", updateFormHandler);
