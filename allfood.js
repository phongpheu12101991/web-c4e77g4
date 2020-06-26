// let nowuser = localStorage.getItem("logged");

if (localStorage.getItem("saveallfoods") !== null) {
  allfoods = JSON.parse(localStorage.getItem("saveallfoods"));
  for (let x of allfoods) {
    x.foodtime = new Date(x.foodtime.split(" "));
  }
}
if (localStorage.getItem("saveaccount") !== null) {
  account = JSON.parse(localStorage.getItem("saveaccount"));
}

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
  localStorage.setItem("saveallfoods", `${JSON.stringify(allfoods)}`);
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
  localStorage.setItem("saveallfoods", `${JSON.stringify(allfoods)}`);
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
      write.value = "";
      localStorage.setItem("saveallfoods", `${JSON.stringify(allfoods)}`);
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
