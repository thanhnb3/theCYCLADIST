const header = document.querySelector(".header");
let lastScrollY = 0; // Vị trí cuộn ban đầu, mục đích là sau mỗi lần cuộn sẽ cập nhật vị trí cuộn

window.addEventListener("scroll", () => {
  const scroll_Y = window.scrollY;

  if (scroll_Y > 70) {
    header.classList.add("active");
    if (scroll_Y > lastScrollY) {
      // Cuộn xuống
      header.classList.remove("action");
    } else {
      // Cuộn lên
      header.classList.add("action");
    }
  } else {
    header.classList.remove("active", "action");
  }

  lastScrollY = scroll_Y; // Cập nhật vị trí cuộn trước đó
});
// Click Scroll to Explore
const clickScroll = document.querySelector(".video-scroll");
clickScroll.addEventListener("click", () => {
  window.scrollTo({
    top: 910,
    behavior: "smooth",
  });
});

const textPlan = document.getElementById("plan-text-color");
const textContent = textPlan.innerHTML;

// Cú pháp tách nội dung HTML của `textPlan` thành các ký tự bao gồm cả thẻ HTML
const characters = textContent
  .split(/(<[^>]+>|.)/g)
  .filter((char) => char !== "");

// Bọc các ký tự trong thẻ <span> nhưng giữ nguyên lớp nếu có
const spans = characters.map((char) => {
  if (char.startsWith("<span") && char.includes("special-plan-text")) {
    // Giữ nguyên thẻ span với lớp "special-plan-text"
    return char;
  } else if (char.startsWith("<")) {
    // Giữ nguyên các thẻ HTML khác (nếu có)
    return char;
  } else {
    // Bọc các ký tự còn lại trong thẻ span
    return `<span>${char}</span>`;
  }
});

// Ghép tất cả phần tử trong mảng thành một chuỗi HTML
const htmlString = spans.join("");
textPlan.innerHTML = htmlString;

// Thêm hiệu ứng đổi màu khi cuộn
const spanElement = document.querySelectorAll("#plan-text-color span");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Lấy giá trị cuộn hiện tại
  const minScroll = 700;
  const maxScroll = 1300;
  const step = (maxScroll - minScroll) / spanElement.length;

  spanElement.forEach((span, index) => {
    const pointText = step * index;
    if (scrollY - 700 > pointText) {
      span.style.color = `rgba(96, 33, 8, 1)`; // Màu đậm
    } else {
      span.style.color = `rgba(96, 33, 8, 0.2)`; // Màu nhạt
    }
  });
});

// home- section4
document.addEventListener("DOMContentLoaded", function () {
  const homeSection4 = document.querySelector(".home-section4");
  const rect = homeSection4.getBoundingClientRect();
  const homeSection4Top = rect.top;
  const homeSection4Height = homeSection4.offsetHeight;

  document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (
      scrollY >= homeSection4Top &&
      scrollY < homeSection4Top + homeSection4Height
    ) {
      homeSection4.style.position = "fixed";
      homeSection4.style.top = "0";
      homeSection4.style.left = "0";
      homeSection4.style.width = "100%";
    } else {
      homeSection4.style.position = "relative";
    }
  });
});
