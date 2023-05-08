window.onload = function () {
  const newArticleButton = document.getElementById("article-post-button");
  articlePosted(newArticleButton);
  const updateSettingsButton = document.getElementById("settings-post-button");
  settingsUpdated(updateSettingsButton);
  const newCommentPostedbtn = document.getElementById("comment-post-button");
  commentPosted(newCommentPostedbtn);
};

const articlePosted = (newArticleButton) => {
  if (!(newArticleButton === null)) {
    newArticleButton.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("inputform").reset();
      setTimeout(() => {
        window.alert("Your new article has been submitted");
      }, 100); // Timeout so it deletes your text before you click the alert
    });
  }
};

const settingsUpdated = (updateSettingsButton) => {
  if (!(updateSettingsButton === null)) {
    updateSettingsButton.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("inputform").reset();
      setTimeout(() => {
        window.alert("Your settings have been saved!");
      }, 100); // Timeout so it deletes your text before you click the alert
    });
  }
};

const commentPosted = (newCommentPostedbtn) => {
  if (!(newCommentPostedbtn === null)) {
    newCommentPostedbtn.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("inputform").reset();
      setTimeout(() => {
        window.alert("Your comment has been saved");
      }, 100); // Timeout so it deletes your text before you click the alert
    });
  }
};
