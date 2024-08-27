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

function toggleShowHideByID(event, toggleID, display) {
  var content = document.getElementById(toggleID);
  var icon = event.currentTarget;
  var computedStyle = window.getComputedStyle(content);

  if (computedStyle.display === "none") {
    // content.style.display = display;
    content.classList.add(`${display}`);
    content.classList.remove("hidden");

    // Thêm sự kiện click vào document để ẩn khi click ra ngoài
    document.addEventListener("click", function outsideClickListener(event) {
      // Kiểm tra nếu click xảy ra bên ngoài cả thẻ <i> và phần tử content
      if (!content.contains(event.target) && !icon.contains(event.target)) {
        // content.style.display = "none";
        content.classList.add("hidden");

        // Loại bỏ sự kiện này sau khi thực hiện để tránh lắng nghe liên tục
        document.removeEventListener("click", outsideClickListener);
      }
    });
  } else {
    // content.style.display = "none";
    content.classList.add("hidden");
  }
}

function toggleDropdown(element) {
  const caret = element.getElementsByClassName('icon1-caret-right')[0];
  const parentWrapper = element.nextElementSibling;
   parentWrapper.classList.toggle("hidden");
  caret.classList.add('transition-all', 'duration-300');
  caret.classList.toggle("rotate-90");

}

function toggleDropDownByID(event, toggleID, display) {
  var content = document.getElementById(toggleID);
  var icon = event.currentTarget;
  var computedStyle = window.getComputedStyle(content);

  if (computedStyle.display === "none") {
    // content.style.display = display;
    content.classList.add(`${display}`);
    content.classList.remove("hidden");

    // Thêm sự kiện click vào document để ẩn khi click ra ngoài
    document.addEventListener("click", function outsideClickListener(event) {
      // Kiểm tra nếu click xảy ra bên ngoài cả thẻ <i> và phần tử content
      if (!content.contains(event.target) && !icon.contains(event.target)) {
        // content.style.display = "none";
        content.classList.add("hidden");

        // Loại bỏ sự kiện này sau khi thực hiện để tránh lắng nghe liên tục
        document.removeEventListener("click", outsideClickListener);
      }
    });
  } else {
    // content.style.display = "none";
    content.classList.add("hidden");
  }
}

function showSettings(buttonId) {
  let button = document.getElementById(buttonId);
  let body = document.getElementsByTagName("body");
  // body[0].style.overflow = 'hidden';
  body[0].setAttribute("style", "overflow:hidden");
  button.style.display = "flex";
}

function hideSettings(buttonId) {
  let button = document.getElementById(buttonId);
  let body = document.getElementsByTagName("body");
  // body[0].style.overflow = 'hidden';
  body[0].removeAttribute("style");
  button.style.display = "none";
}

function showFlex(buttonId) {
  let button = document.getElementById(buttonId);
  button.style.display = "flex";
}
function showBlock(buttonId) {
  let button = document.getElementById(buttonId);
  button.style.display = "block";
}

function hide(buttonId) {
  let button = document.getElementById(buttonId);
  button.style.display = "none";
}

function btnChat() {
  let btn = document.getElementsByClassName("btn-support-chat")[0];
  let chat = document.getElementsByClassName("support-chat")[0];
  let children = btn.children;
  // Kiểm tra trạng thái hiển thị của phần tử đầu tiên
  if (chat.style.transform === "scale(1)") {
    // Nếu phần tử đầu tiên đang hiển thị, ẩn nó đi và hiển thị các phần tử khác
    btn.style.padding = "0.625rem 1rem 0.625rem 1rem";
    chat.style.transform = "scale(0)";
    if (window.innerWidth > 640) {
      children[0].style.display = "none";
      children[1].style.display = "none";
      children[2].style.display = "block";
      children[3].style.display = "block";
    } else {
      btn.style.padding = "0.625rem";
      children[0].style.display = "block";
      children[1].style.display = "none";
      children[2].style.display = "none";
      children[3].style.display = "block";
    }
  } else {
    // Nếu phần tử đầu tiên đang ẩn, hiển thị nó và ẩn các phần tử khác
    btn.style.padding = "0.625rem";

    chat.style.transform = "scale(1)";
    children[0].style.display = "block";
    children[1].style.display = "none";
    children[2].style.display = "none";
    children[3].style.display = "none";
  }
}
