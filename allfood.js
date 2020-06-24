let nowuser = localStorage.getItem("logged");

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
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
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
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
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
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
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
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
  },
];

function getfood() {
  if (localStorage.getItem("saveallfoods") !== null) {
    allfoods = JSON.parse(localStorage.getItem("saveallfoods"));
    for (let x of allfoods) {
      x.foodtime = new Date(x.foodtime.split(" "));
    }
  }
}
function savefood() {
  localStorage.setItem("saveallfoods", `${JSON.stringify(allfoods)}`);
}
getfood();
// Reload từ đầu: đổi getfood thành savefood, refresh
let monchitiet = document.getElementById("monchitiet");

for (let x of allfoods) {
  if (x.foodid == localStorage.getItem("viewfood")) {
    x.views++;
    monchitiet.innerHTML = `<div id="minifood">
<h1 id='tenmonchitiet'>${x.foodname}</h1>
<img src="${x.foodimage}" alt="x">
<hr>
<p>Lượt xem: ${x.views}</p>
<div id=likedislike>
<div id='divlike' class='likeanddislike'><i class="fas fa-heart" id='likeicon'></i><div class='solieu' id='likes'>${x.like.length}</div></div><div id='divdislike' class='likeanddislike'><i class="fas fa-thumbs-down" id='dislikeicon'></i><div class='solieu' id='dislikes'>${x.dislike.length}</div></div></div>
<h1>Nguyên liệu:</h1> ${x.foodmaterials}
<h1>Cách làm:</h1>
 ${x.foodmaking}
 <br>
 <h6>Ngày đăng: ${x.foodtime}</h6>
 <h6>Người đăng: ${x.creator}</h6>
   <br>
   <div id="comment">
      <h1>Bình luận</h1>
      <div id="allcmt" class="scrollbar">
      <div class="force-overflow"></div>
      <div id='printcmt'></div>
      </div>
      <br>
      <div id="addcmt">
        <input type="text" id='write' placeholder="Viết gì đó...">
        <input type="submit" id='writeok' value="OK">
      </div>
    </div> 
   
   
   
   `;

    console.log(x.views);
    localStorage.setItem("saveallfoods", `${JSON.stringify(allfoods)}`);
    break;
  }
}

let login = document.getElementById("log-in");
let addfood = document.getElementById("add");
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

//like
let likeicon = document.getElementById("likeicon");
let dislikeicon = document.getElementById("dislikeicon");
let divlike = document.getElementById("divlike");
let divdislike = document.getElementById("divdislike");
let likes = document.getElementById("likes");
let dislikes = document.getElementById("dislikes");

function checklike() {
  for (let x of allfoods) {
    if (x.foodid == localStorage.getItem("viewfood")) {
      if (x.like.indexOf(nowuser) == -1) {
        likeicon.classList = "far fa-heart";
      }
    }
    if (x.foodid == localStorage.getItem("viewfood")) {
      if (x.dislike.indexOf(nowuser) == -1) {
        dislikeicon.classList = "far fa-thumbs-down";
      }
    }
  }
}
checklike();

likeicon.addEventListener("click", presslike);
dislikeicon.addEventListener("click", pressdislike);

function pressdislike() {
  for (let x of allfoods) {
    if (x.foodid == localStorage.getItem("viewfood")) {
      if (x.dislike.indexOf(nowuser) !== -1) {
        x.dislike.splice(x.dislike.indexOf(nowuser), 1);
        dislikeicon.classList = "far fa-thumbs-down";
      } else if (x.dislike.indexOf(nowuser) == -1) {
        x.dislike.push(nowuser);
        dislikeicon.classList = "fas fa-thumbs-down";
        if (x.like.indexOf(nowuser) !== -1) {
          x.like.splice(x.like.indexOf(nowuser), 1);
          likeicon.classList = "far fa-heart";
        }
      }
    }
  }
  for (let x of allfoods) {
    if (x.foodid == localStorage.getItem("viewfood")) {
      dislikes.innerText = `${x.dislike.length}`;
      likes.innerText = `${x.like.length}`;
    }
  }
  savefood();
}
function presslike() {
  for (let x of allfoods) {
    if (x.foodid == localStorage.getItem("viewfood")) {
      if (x.like.indexOf(nowuser) !== -1) {
        x.like.splice(x.like.indexOf(nowuser), 1);
        likeicon.classList = "far fa-heart";
        console.log(x.like);
      } else if (x.like.indexOf(nowuser) == -1) {
        x.like.push(nowuser);
        likeicon.classList = "fas fa-heart";
        console.log(x.like);
        if (x.dislike.indexOf(nowuser) !== -1) {
          x.dislike.splice(x.dislike.indexOf(nowuser), 1);
          dislikeicon.classList = "far fa-thumbs-down";
        }
      }
    }
  }
  for (let x of allfoods) {
    if (x.foodid == localStorage.getItem("viewfood")) {
      likes.innerText = `${x.like.length}`;
      dislikes.innerText = `${x.dislike.length}`;
    }
  }
  savefood();
}

let allcmt = document.getElementById("allcmt");
let write = document.getElementById("write");
let writeok = document.getElementById("writeok");
let printcmt = document.getElementById("printcmt");

writeok.addEventListener("click", upcmt);

function upcmt() {
  let cmt = `<div class='cmtxx'><div class='namecmt'>${nowuser}<p class='pcmt'> đã bình luận:</p></div><div class='ctcmt'>${write.value}</div></div>`;
  for (let x of allfoods) {
    if (x.foodid == localStorage.getItem("viewfood")) {
      x.foodcmt.push(cmt);
      printcmt.innerHTML = `${x.foodcmt.join("")}`;
      savefood();
    }
  }
}

function getcmt() {
  for (let x of allfoods) {
    if (x.foodid == localStorage.getItem("viewfood")) {
      printcmt.innerHTML = `${x.foodcmt.join("")}`;
    }
  }
}

getcmt();
write.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    writeok.click();
  }
});
