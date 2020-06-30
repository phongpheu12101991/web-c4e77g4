// let cover = document.getElementById(`cover-picture`);
// cover.innerHTML= `<div
// id="carouselExampleIndicators"
// class="carousel slide"
// data-ride="carousel"
// >
// <ol class="carousel-indicators">
//   <li
//     data-target="#carouselExampleIndicators"
//     data-slide-to="0"
//     class="active"
//   ></li>
//   <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//   <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
// </ol>
// <div class="carousel-inner">
//   <div class="carousel-item active">
//     <div
//       class="img1"
//       style="
//         background: url('https://i.pinimg.com/originals/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg');
//       "
//     ></div>
//   </div>
//   <div class="carousel-item">
//     <div
//       class="img2"
//       style="
//         background: url('https://wallpapercave.com/wp/wp3105346.jpg');
//       "
//     ></div>
//   </div>
//   <div class="carousel-item">
//     <div
//       class="img3"
//       style="
//         background: url('https://wallpapersmug.com/download/3840x2400/ddcbbf/food-pizza-baking.jpg');
//       "
//     ></div>
//   </div>
// </div>
// <a
//   class="carousel-control-prev"
//   href="#carouselExampleIndicators"
//   role="button"
//   data-slide="prev"
// >
//   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span class="sr-only">Previous</span>
// </a>
// <a
//   class="carousel-control-next"
//   href="#carouselExampleIndicators"
//   role="button"
//   data-slide="next"
// >
//   <span class="carousel-control-next-icon" aria-hidden="true"></span>
//   <span class="sr-only">Next</span>
// </a>
// </div>`





// 

let taskbar = document.getElementById("taskbar");
taskbar.innerHTML = `<div id="logo">
<img src="C:/Users/Admin/Desktop/logo.png" alt="x" id="imagelogo" />
</div>
<div id="searchbutton" class="box">
<div class="container-1">
  <span class="icon" id="entersearch"
    ><i class="fas fa-search"></i
  ></span>
  <input
    type="search"
    id="search"
    placeholder="Search..."
    onkeypress="return pressenter(event)"
  />
</div>
</div>
<div id="add">Thêm món mới</div>
<div id="log-in"><p id='plogin'>LOG IN</p><i class="fas fa-bars" id='menulogin'></i>
</div>
<div id='logindrop'>
<div id='drop1'></div>
<div id='drop2'></div>
</div>`;

let logo = document.getElementById("logo");
let login = document.getElementById("log-in");
let addfood = document.getElementById("add");
let gosearch = document.getElementById("entersearch");
let inputsearch = document.getElementById("search");

logo.addEventListener("click", gohomepage);
function gohomepage() {
  location.href = "home.html";
}
function pressenter(event) {
  if (event.keyCode === 13) {
    location.href = "search.html";
    localStorage.setItem("taskfindwhat", `${inputsearch.value}`);
    localStorage.setItem("taskfind", `findnew`);
  }
}

gosearch.addEventListener("click", gosearchpage);
function gosearchpage() {
  location.href = "search.html";
  localStorage.setItem("taskfindwhat", `${inputsearch.value}`);
  localStorage.setItem("taskfind", `findnew`);
}

addfood.addEventListener("click", goaddfoodpage);
function goaddfoodpage() {
  if (nowuser == "") {
    addfood.addEventListener("click", nologin);
  } else {
    location.href = "addfood.html";
  }
}
let nowuser = localStorage.getItem("logged");

let plogin = document.getElementById("plogin");
if (nowuser !== "") {
  plogin.innerHTML = `<i class="fas fa-user-circle"></i> ${nowuser}`;
} else {
  plogin.innerText = "Đăng nhập";
}

function nologin() {
  alert("Bạn cần đăng nhập để có thể tạo món");
}

let logindrop = document.getElementById("logindrop");
let menulogin = document.getElementById("menulogin");
menulogin.addEventListener("click", dropmenu);
function dropmenu() {
  logindrop.style.width = "150px";
  logindrop.style.height = "50px";
  if (nowuser !== "") {
    drop1.innerText = `Thông tin tài khoản`;
    drop2.innerText = `Đăng xuất`;
  } else {
    drop1.innerText = `Đăng nhập`;
    drop2.innerText = `Đăng kí`;
  }
}
logindrop.addEventListener("mouseleave", hidemenu);
function hidemenu() {
  logindrop.style.width = "0";
  logindrop.style.height = "0";
  drop1.innerText = "";
  drop2.innerText = "";
}

let drop1 = document.getElementById("drop1");
let drop2 = document.getElementById("drop2");

drop1.addEventListener("click", drop1go);
function drop1go() {
  if (nowuser !== "") {
    location.href = "userpage.html";
  } else {
    location.href = "login.html";
  }
}

drop2.addEventListener("click", drop2go);
function drop2go() {
  if (nowuser !== "") {
    localStorage.setItem("logged", "");
    location.href = "home.html";
  } else {
    location.href = "register.html";
  }
}
plogin.addEventListener("click", ploginclick);
function ploginclick() {
  if (nowuser !== "") {
    location.href = "userpage.html";
  } else {
    location.href = "login.html";
  }
}
