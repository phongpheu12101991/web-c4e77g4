//mảng chứa món ăn

let allfoods = [
  {
    foodname: "Trà đào cam sả",
    foodimage: "C:/Users/Admin/Desktop/recipe16934-635979775269411988.jpg",
    foodmaterials:
      '<ul id="nltradaocamsa"><li>Đào : 1 quả</li><li>Đường nước: 30ml</li><li>Trà: 200ml</li><li>Siro đào: 20ml</li><li>Siro sả: 10ml</li><li>Nước cam: 100ml</li><li>Sả: 1 cây</li><li>Đá: vừa đủ</li></ul>',
    foodmaking:
      '<ul id="cltradaocamsa"><li>Đào : Gọt vỏ, cắt miếng</li><li>Cho hỗn hợp đường, siro, trà, nước cam vào bình shake, thêm đá vừa đủ, lắc mạnh</li><li>Cây sả cắt bỏ 2 đầu, đập dập, cam cắt 1 lát</li><li>Đổ toàn bộ ra cốc, cắm cây sả, thêm lát cam và miếng đào để decor, thưởng thức</li></ul>',
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

// allfoods = localStorage.getItem("saveallfoods");
//mảng chứa tài khoản
let account = [
  {
    username: `phong`,
    password: `123`,
    email: `phong@gmail.com`,
    type: `admin`,
  },
  {
    username: `duong`,
    password: `123`,
    email: `duong@gmail.com`,
    type: `admin`,
  },
  {
    username: `quan`,
    password: `123`,
    email: `quan@gmail.com`,
    type: `admin`,
  },
];

let login = document.getElementById("log-in");
let addfood = document.getElementById("add");
let newimage1 = document.getElementById("newimage1");
let newimage2 = document.getElementById("newimage2");
let newimage3 = document.getElementById("newimage3");
let newimage4 = document.getElementById("newimage4");

let newname1 = document.getElementById("newname1");
let newname2 = document.getElementById("newname2");
let newname3 = document.getElementById("newname3");
let newname4 = document.getElementById("newname4");
let newid1 = document.getElementById("newid1");
let newid2 = document.getElementById("newid2");
let newid3 = document.getElementById("newid3");
let newid4 = document.getElementById("newid4");

let allmininewname = [newname1, newname2, newname3, newname4];
let allmininewimage = [newimage1, newimage2, newimage3, newimage4];
let allminiid = [newid1, newid2, newid3, newid4];

localStorage.setItem("logged", `phong`);
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

function boxnewfood() {
  let thutu = [];
  let xeptime = [];
  for (let i = 0; i < allfoods.length; i++) {
    xeptime.push(allfoods[i].foodtime);
  }
  xeptime.sort(function (a, b) {
    return b - a;
  });
  for (let n = 0; n < xeptime.length; n++) {
    for (let i = 0; i < allfoods.length; i++) {
      if (allfoods[i].foodtime == xeptime[n]) {
        thutu.push(i);
      }
    }
  }

  for (let x = 0; x < 4; x++) {
    allmininewimage[x].style.backgroundImage = `url("${
      allfoods[thutu[x]].foodimage
    }")`;
    allmininewname[x].innerText = allfoods[thutu[x]].foodname;
    allminiid[x].innerText = allfoods[thutu[x]].foodid;
  }
  console.log(thutu);
}
boxnewfood();

let newfood1 = document.getElementById("newfood1");
let newfood2 = document.getElementById("newfood2");
let newfood3 = document.getElementById("newfood3");
let newfood4 = document.getElementById("newfood4");
// let allnewfoods = [newfood1, newfood2, newfood3, newfood4];
newfood1.addEventListener(`click`, setviewfood);
newfood2.addEventListener(`click`, setviewfood);
newfood3.addEventListener(`click`, setviewfood);
newfood4.addEventListener(`click`, setviewfood);

function setviewfood() {
  let setid = `newid` + `${this.id}`[this.id.length - 1];
  let idset;

  for (let x of allminiid) {
    if (x.id.toString() == setid) {
      x.style.visibility = "visible";
      idset = x.innerText;
      x.style.visibility = "hidden";
    }
  }
  localStorage.setItem("viewfood", idset);
  console.log(localStorage.getItem("viewfood"));
}
