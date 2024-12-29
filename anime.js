// // let button
// const buttonWrap = document.querySelector(".lets-plan-button-wrap");
// const buttonActive = document.querySelector(".lets-plan-button");
// const infoButtonWrap = buttonWrap.getBoundingClientRect(); // lấy kích thước và vị trí của div bọc bên ngoài
// const buttonSize = 190; // Kích thước (đường kính) của nút

// buttonActive.addEventListener("mousemove", (event) => {
//   const mouseX = event.clientX - infoButtonWrap.left;
//   const mouseY = event.clientY - infoButtonWrap.top;
//   //   xác định toạ độ chuột nằm trong vùng buttonWrap

//   // Lấy tọa độ hiện tại của hình tròn
//   const currentX =
//     parseFloat(getComputedStyle(buttonActive).getPropertyValue("left")) || 0;
//   const currentY =
//     parseFloat(getComputedStyle(buttonActive).getPropertyValue("top")) || 0;

//   const x = Math.min(
//     Math.max(currentX + (mouseX - (currentX + buttonSize / 2)) / 2, 0),
//     infoButtonWrap.width - buttonSize
//   );
//   const y = Math.min(
//     Math.max(currentY + (mouseY - (currentY + buttonSize / 2)) / 2, 0),
//     infoButtonWrap.height - buttonSize
//   );

//   anime({
//     targets: buttonActive,
//     left: `${x}px`,
//     top: `${y}px`,
//     duration: 5,
//     easing: "easeOutQuad",
//   });
// });
