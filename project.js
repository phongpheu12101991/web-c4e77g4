let allfoods = [
  {
    foodname: "Trà đào cam sả",
    foodimage: "C:/Users/Admin/Desktop/recipe16934-635979775269411988.jpg",
    foodmaterials:
      '<ul id="nltradaocamsa"><li>Đào : 1 quả</li><hr><li>Đường nước: 30ml</li><hr><li>Trà: 200ml</li><hr><li>Siro đào: 20ml</li><hr><li>Siro sả: 10ml</li><hr><li>Nước cam: 100ml</li><hr><li>Sả: 1 cây</li><hr><li>Đá: vừa đủ</li><hr></ul>',
    foodmaking:
      '<ul id="cltradaocamsa"><li>Đào : Gọt vỏ, cắt miếng</li><hr><li>Cho hỗn hợp đường, siro, trà, nước cam vào bình shake, thêm đá vừa đủ, lắc mạnh</li><hr><li>Cây sả cắt bỏ 2 đầu, đập dập, cam cắt 1 lát</li><hr><li>Đổ toàn bộ ra cốc, cắm cây sả, thêm lát cam và miếng đào để decor, thưởng thức</li><hr></ul>',
    foodtime: new Date(2019, 10, 24, 16, 18, 20),
    creator: `phong`,
    rate: { phong: `3` },
    foodid: 0,
  },
  {
    foodname: "Trà quế cam mật ong",
    foodimage: "C:/Users/Admin/Desktop/recipe16934-635979775269411988.jpg",
    foodmaterials:
      '<ul id="nltradaocamsa"><li>Đào : 1 quả</li><li>Đường nước: 30ml</li><li>Trà: 200ml</li><li>Siro đào: 20ml</li><li>Siro sả: 10ml</li><li>Nước cam: 100ml</li><li>Sả: 1 cây</li><li>Đá: vừa đủ</li></ul>',
    foodmaking:
      '<ul id="cltradaocamsa"><li>Đào : Gọt vỏ, cắt miếng</li><li>Cho hỗn hợp đường, siro, trà, nước cam vào bình shake, thêm đá vừa đủ, lắc mạnh</li><li>Cây sả cắt bỏ 2 đầu, đập dập, cam cắt 1 lát</li><li>Đổ toàn bộ ra cốc, cắm cây sả, thêm lát cam và miếng đào để decor, thưởng thức</li></ul>',
    foodtime: new Date(2019, 11, 24, 16, 18, 20),
    creator: `phong`,
    rate: { phong: `3` },
    foodid: 1,
  },
  {
    foodname: "Trà táo bạc hà",
    foodimage: "C:/Users/Admin/Desktop/recipe16934-635979775269411988.jpg",
    foodmaterials:
      '<ul id="nltradaocamsa"><li>Đào : 1 quả</li><li>Đường nước: 30ml</li><li>Trà: 200ml</li><li>Siro đào: 20ml</li><li>Siro sả: 10ml</li><li>Nước cam: 100ml</li><li>Sả: 1 cây</li><li>Đá: vừa đủ</li></ul>',
    foodmaking:
      '<ul id="cltradaocamsa"><li>Đào : Gọt vỏ, cắt miếng</li><li>Cho hỗn hợp đường, siro, trà, nước cam vào bình shake, thêm đá vừa đủ, lắc mạnh</li><li>Cây sả cắt bỏ 2 đầu, đập dập, cam cắt 1 lát</li><li>Đổ toàn bộ ra cốc, cắm cây sả, thêm lát cam và miếng đào để decor, thưởng thức</li></ul>',
    foodtime: new Date(2019, 5, 20, 16, 18, 20),
    creator: `phong`,
    rate: { phong: `3` },
    foodid: 2,
  },
  {
    foodname: "Trà hạt sen lá nếp",
    foodimage: "C:/Users/Admin/Desktop/recipe16934-635979775269411988.jpg",
    foodmaterials:
      '<ul id="nltradaocamsa"><li>Đào : 1 quả</li><li>Đường nước: 30ml</li><li>Trà: 200ml</li><li>Siro đào: 20ml</li><li>Siro sả: 10ml</li><li>Nước cam: 100ml</li><li>Sả: 1 cây</li><li>Đá: vừa đủ</li></ul>',
    foodmaking:
      '<ul id="cltradaocamsa"><li>Đào : Gọt vỏ, cắt miếng</li><li>Cho hỗn hợp đường, siro, trà, nước cam vào bình shake, thêm đá vừa đủ, lắc mạnh</li><li>Cây sả cắt bỏ 2 đầu, đập dập, cam cắt 1 lát</li><li>Đổ toàn bộ ra cốc, cắm cây sả, thêm lát cam và miếng đào để decor, thưởng thức</li></ul>',
    foodtime: new Date(2019, 4, 22, 16, 18, 20),
    creator: `phong`,
    rate: { phong: `3` },
    foodid: 3,
  },
];
allfoods = JSON.parse(localStorage.getItem("saveallfoods"));
console.log(allfoods);
let login = document.getElementById("log-in");
let addfood = document.getElementById("add");

let account = [
  {
    username: `phong`,
    password: `123`,
    email: `phong@gmail.com`,
    type: `admin`,
  },
];

let nowuser = localStorage.getItem("logged");
if (nowuser !== "") {
  login.innerText = nowuser;
  console.log(addfood);
} else {
  login.innerText = "Log in";
}
if (nowuser == "") {
  addfood.addEventListener("click", nologin);
}
function nologin() {
  alert("Ban can dang nhap");
}
//addnguyenlieu

let namefood = document.getElementById("namefood");
let nguyenlieu = document.getElementById("nguyenlieu");

let addnglieu = document.getElementById("addnglieu");
let buoc1 = document.getElementById("buoc1");
let thembuoc = document.getElementById("thembuoc");
let addanh = document.getElementById("addanh");
// // let nltemp = nguyenlieu.innerHTML;
// let x = 0;
// let cacdong = [];
// let cacso = [];

// addnglieu.addEventListener("click", addnguyenlieu);
// function addnguyenlieu() {
//   x++;
//   // if (x > 1) {
//   //   for (let m = 1; m < x; m++) {
//   //     cacso.push(cacdong[m].value);
//   //   }
//   // }

//   nguyenlieu.innerHTML =
//     nguyenlieu.innerHTML +
//     `<label for="">- </label><input type="text" id="nglieu${x}" placeholder="Thêm nguyên liệu" value='${
//       cacso[x - 2]
//     }'/><hr>`;

//   cacdong.push(document.getElementById(`nglieu${x}`));

//   for (let i = 0; i < x - 1; i++) {
//     cacso[i] = cacdong[i].value;
//     console.log(cacso[i]);
//   }
//   console.log(cacdong);
// }
// addnglieu.addEventListener("click", addnguyenlieu);
let formaddnl = document.getElementById("form-add");
formaddnl.addEventListener("submit", onSubmitevent);
let ul = document.getElementById("list");
let ulnlchitiet = document.getElementById("ulnlchitiet");
let arrulnl = [];
let arrulcl = [];

function onSubmitevent(event) {
  event.preventDefault();
  console.log(event);

  let nlcanadd = formaddnl.themmon.value;

  let li = document.createElement("li");
  li.innerHTML = `_ <input type="text" name="themmon" value="${nlcanadd}" /><button id="del">Delete</button>`;
  li.className = "liinput";
  ul.appendChild(li);
  formaddnl.themmon.value = "";
  //tao li ben chi tiet
  arrulnl.push(nlcanadd);
  // let lichitiet = document.createElement("li");
  // lichitiet.innerHTML = `${nlcanadd}`;
  // ulnlchitiet.appendChild(lichitiet);
}
ul.addEventListener("click", onDeleteEvent);
function onDeleteEvent(event) {
  console.log(event.target);
  if (event.target.id === "del") {
    event.target.parentNode.remove();
  }
}

//addcl
let formaddcl = document.getElementById("form-do");
formaddcl.addEventListener("submit", onSubmitevent2);
let ulcl = document.getElementById("listcl");

function onSubmitevent2(event) {
  event.preventDefault();
  console.log(event);

  let clcanadd = formaddcl.thembuoc.value;
  let li = document.createElement("li");
  li.innerHTML = `_ <input type="text" name="thembuoc" value="${clcanadd}" /><button id="del">Delete</button>`;
  li.className = "liinput";
  ulcl.appendChild(li);
  arrulcl.push(clcanadd);
  formaddcl.thembuoc.value = "";
}
ulcl.addEventListener("click", onDeleteEvent2);
function onDeleteEvent2(event) {
  console.log(event.target);
  if (event.target.id === "del") {
    event.target.parentNode.remove();
  }
}
//add hoan chinh

// let allfoods = [
//   `<div id="minifood">
// <h1 id="tenmonchitiet">Nước Chanh Tươi</h1>
// <img src="" alt="x">
// <hr>
// <h1>Nguyên liệu:</h1> <ul id="ulnlchitiet"><li>Chanh : 2 quả</li><li>Đường: 50ml</li><li>Nước lọc: 200ml</li><li>Đá: vừa đủ</li></ul>
// <h1>Cách làm:</h1>
//  <ul id="ulnlchitiet"><li>Vắt chanh + đường + nc + đá vào bình shake =&gt; lắc</li></ul>
// </div>`,
// ];
let crnewfood = document.getElementById("crnewfoods");
let okadd = document.getElementById("okadd");
okadd.addEventListener("click", creatfood);
function creatfood() {
  // console.log(ul.innerHTML);
  // console.log(ulcl.innerHTML);
  // console.log(ulnlchitiet);
  // console.log(arrulnl);
  let xx = `<ul id="nl${allfoods.length}">`;
  for (let i = 0; i < arrulnl.length; i++) {
    xx = xx + `<li>${arrulnl[i]}</li><hr>`;
  }
  let xxx = xx + `</ul>`;

  let yy = `<ul id="cl${allfoods.length}">`;
  for (let i = 0; i < arrulcl.length; i++) {
    yy = yy + `<li>${arrulcl[i]}</li><hr>`;
  }
  let yyy = yy + `</ul>`;

  // crnewfood.innerHTML = `<div id="minifood">
  //   <h1 id='tenmonchitiet'>${allfoods[0].foodname}</h1>
  //   <img src="${allfoods[0].foodimage}" alt="x">
  //   <hr>
  //   <h1>Nguyên liệu:</h1> ${allfoods[0].foodmaterials}
  //   <h1>Cách làm:</h1>
  //    ${allfoods[0].foodmaking}
  //    <hr>
  //    <h6>Ngày đăng: ${allfoods[0].foodtime}</h6>
  //    <h6>Người đăng: ${allfoods[0].creator}</h6>
  //      </>`;
  allfoods.push({
    foodname: namefood.value,
    foodimage: addanh.value,
    foodmaterials: xxx,
    foodmaking: yyy,
    foodtime: new Date(),
    creator: nowuser,
    rate: {},
    foodid: allfoods.length,
    views: 0,
    like: [],
    dislike: [],
  });
  console.log(allfoods[allfoods.length - 1]);
  localStorage.setItem("saveallfoods", `${JSON.stringify(allfoods)}`);
  allfoods = JSON.parse(localStorage.getItem("saveallfoods"));
}
