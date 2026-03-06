function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim().toLowerCase();
}

function checkProgress() {
  const body = document.body;
  const face = document.querySelector(".face");
  const title = document.querySelector(".title");
  const message = document.querySelector(".message");
  const stopCode = document.querySelector(".stop-code");
  const progressBar = document.querySelector(".progress-bar");
  const percent = document.querySelector(".percent");

  if (
    !body ||
    !face ||
    !title ||
    !message ||
    !stopCode ||
    !progressBar ||
    !percent
  ) {
    return;
  }

  let progress = 0;

  const bgColor = getComputedStyle(body).backgroundColor;
  const titleText = normalizeText(title.textContent);
  const messageText = normalizeText(message.textContent);
  const stopCodeText = normalizeText(stopCode.textContent);
  const faceText = face.textContent.trim();

  const level1Done =
    titleText === "system restored" &&
    messageText === "welcome back! the system is running successfully." &&
    (faceText === ":|") | (faceText === ":)") &&
    stopCodeText === "restore code: success_2026";

  const level2Done = bgColor !== "rgb(2, 55, 171)";

  const level3Done = faceText === ":)";

  if (level1Done) {
    progress = 33;
  }

  if (level1Done && level2Done) {
    progress = 66;
  }

  progressBar.style.width = progress + "%";
  percent.textContent = progress + "%";
}

checkProgress();
setInterval(checkProgress, 300);
