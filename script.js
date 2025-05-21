const header = document.querySelector(".profile-header");
const title = document.querySelector(".profile-name");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    header.style.height = "150px"; // 縮小 header
    title.style.fontSize = "1.5rem"; // 縮小文字
  } else {
    header.style.height = "300px"; // 還原高度
    title.style.fontSize = "2.5rem"; // 還原文字
  }
});