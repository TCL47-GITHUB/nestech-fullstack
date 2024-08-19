// document.addEventListener("DOMContentLoaded", () => {
//   const toggleCollapsed = document.getElementById("nav-toggle");
//   toggleCollapsed.addEventListener("click", () => {
//     toggleCollapsed.classList.toggle("collapsed");
//   });
// });

function copyContent(elementId) {
  // Lấy nội dung từ phần tử có ID được truyền vào
  var content = document.getElementById(elementId).textContent;

  // Sử dụng Clipboard API để sao chép nội dung vào clipboard
  navigator.clipboard
    .writeText(content)
    .then(function () {
      // Thành công
      alert("Nội dung đã được sao chép vào clipboard: " + content);
    })
    .catch(function (error) {
      // Xử lý lỗi
      console.error("Lỗi khi sao chép nội dung: ", error);
    });
}

function toggleContent(buttonId, contentId) {
  var button = document.getElementById(buttonId);
  var content = document.getElementById(contentId);
  var computedStyle = window.getComputedStyle(content);

  if (computedStyle.display === "none") {
    content.style.display = "block";
    button.innerHTML = '<i class="mm-1 icon1-eye-off"></i> Hide code';
  } else {
    content.style.display = "none";
    button.innerHTML = '<i class="mm-1 icon1-eye"></i> View code';
  }
}

function toggleShowHide(toggleID) {
  var content = document.getElementById(toggleID);
  var computedStyle = window.getComputedStyle(content);
  if (computedStyle.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

function showSettings(buttonId) {
  let button = document.getElementById(buttonId);
  let body = document.getElementsByTagName('body');
  // body[0].style.overflow = 'hidden';
  body[0].setAttribute('style', 'overflow:hidden');
  button.style.display = 'flex' ;
}

function hideSettings(buttonId) {
  let button = document.getElementById(buttonId);
  let body = document.getElementsByTagName('body');
  // body[0].style.overflow = 'hidden';
  body[0].removeAttribute('style');
  button.style.display = 'none' ;
}

function showFlex(buttonId) {
  let button = document.getElementById(buttonId);
  button.style.display = 'flex' ;
}
function showBlock(buttonId) {
  let button = document.getElementById(buttonId);
  button.style.display = 'block' ;
}

function hide(buttonId){
  let button = document.getElementById(buttonId);
  button.style.display = 'none' ;
}
