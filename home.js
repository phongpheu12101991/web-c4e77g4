if (localStorage.getItem("saveallfoods") !== null) {
  allfoods = JSON.parse(localStorage.getItem("saveallfoods"));
  for (let x of allfoods) {
    x.foodtime = new Date(x.foodtime.split(" "));
  }
}
if (localStorage.getItem("saveaccount") !== null) {
  account = JSON.parse(localStorage.getItem("saveaccount"));
}

console.log(allfoods)
console.log(account)
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
let newtime1 = document.getElementById("newtime1");
let newtime2 = document.getElementById("newtime2");
let newtime3 = document.getElementById("newtime3");
let newtime4 = document.getElementById("newtime4");

let newview1 = document.getElementById("newview1");
let newview2 = document.getElementById("newview2");
let newview3 = document.getElementById("newview3");
let newview4 = document.getElementById("newview4");
let newlike1 = document.getElementById("newlike1");
let newlike2 = document.getElementById("newlike2");
let newlike3 = document.getElementById("newlike3");
let newlike4 = document.getElementById("newlike4");
let newtagsave1 = document.getElementById("newtagsave1");
let newtagsave2 = document.getElementById("newtagsave2");
let newtagsave3 = document.getElementById("newtagsave3");
let newtagsave4 = document.getElementById("newtagsave4");

let allmininewname = [newname1, newname2, newname3, newname4];
let allmininewimage = [newimage1, newimage2, newimage3, newimage4];
let allminiid = [newid1, newid2, newid3, newid4];
let allminitime = [newtime1, newtime2, newtime3, newtime4];
let allminiview = [newview1, newview2, newview3, newview4];
let allminilike = [newlike1, newlike2, newlike3, newlike4];
let allminitagsave = [newtagsave1, newtagsave2, newtagsave3, newtagsave4];

let allbookmarkhome = [newtagsave1, newtagsave2, newtagsave3, newtagsave4];
let sortbookmark = [];

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
  for (let i = 0; i < 4; i++) {
    sortbookmark[i] = thutu[i];
  }
  for (let x = 0; x < 4; x++) {
    allmininewimage[x].style.backgroundImage = `url("${
      allfoods[thutu[x]].foodimage
    }")`;
    allmininewname[x].innerText = allfoods[thutu[x]].foodname;
    allminiid[x].innerText = allfoods[thutu[x]].foodid;
    allminiview[x].innerText = `${allfoods[thutu[x]].views} lượt xem`;
    allminilike[x].innerHTML = `<i class="fas fa-heart"></i> ${
      allfoods[thutu[x]].like.length
    }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
      allfoods[thutu[x]].dislike.length
    }`;
    //tagsave
    for (let z of account) {
      if (z.username == nowuser) {
        console.log(z.savemenu)
        if (z.savemenu.indexOf(thutu[x]) !== -1) {
          allminitagsave[x].classList = `fas fa-bookmark bm2`;
          allminitagsave[x].title = "Đã lưu";
        } else {
          allminitagsave[x].classList = `far fa-bookmark bm1`;
          allminitagsave[x].title = "Lưu món";
        }
      }
    }
    allminitagsave[x];
    // tính giờ chênh lệch:
    let calcutime = (new Date() - allfoods[thutu[x]].foodtime) / (1000 * 60);
    if (calcutime > 60 * 24 * 365) {
      allminitime[x].innerText = `${Math.floor(
        calcutime / (60 * 24 * 365)
      )} năm trước`;
    } else if (calcutime > 60 * 24 * 30) {
      allminitime[x].innerText = `${Math.floor(
        calcutime / (60 * 24 * 30)
      )} tháng trước`;
    } else if (calcutime > 60 * 24) {
      allminitime[x].innerText = `${Math.floor(
        calcutime / (60 * 24)
      )} ngày trước`;
    } else if (calcutime > 60) {
      allminitime[x].innerText = `${Math.floor(calcutime / 60)} giờ trước`;
    } else if (calcutime >= 1) {
      allminitime[x].innerText = `${Math.floor(calcutime)} phút trước`;
    } else {
      allminitime[x].innerText = `${Math.floor(calcutime * 60)} giây trước`;
    }
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

// link to monchitiet

document.querySelectorAll(".newfoodx").forEach((item) => {
  item.addEventListener("click", (event) => {
    location.href = "monchitiet.html";
  });
});



// hotfoods

let xepview = [];
for (let x of allfoods) {
  xepview.push(x.views);
}
xepview.sort(function (a, b) {
  return b - a;
});
console.log(xepview);
let xepidx = [];
let xepid = [];
for (let x of allfoods) {
  xepidx.push(x.foodid);
}
console.log(xepidx);
for (let i = 0; i <= xepview.length - 1; i++) {
  for (let ii = 0; ii < xepidx.length; ii++) {
    if (allfoods[xepidx[ii]].views == xepview[i]) {
      xepid.push(xepidx[ii]);
      xepidx.splice(ii, 1);
      console.log(xepidx);
      break;
    }
  }
}
console.log(xepid);
function caltime(x) {
  let timeresult = "";
  let tinhtime = (new Date() - x) / (1000 * 60);
  if (tinhtime > 60 * 24 * 365) {
    timeresult = `${Math.floor(tinhtime / (60 * 24 * 365))} năm trước`;
  } else if (tinhtime > 60 * 24 * 30) {
    timeresult = `${Math.floor(tinhtime / (60 * 24 * 30))} tháng trước`;
  } else if (tinhtime > 60 * 24) {
    timeresult = `${Math.floor(tinhtime / (60 * 24))} ngày trước`;
  } else if (tinhtime > 60) {
    timeresult = `${Math.floor(tinhtime / 60)} giờ trước`;
  } else if (tinhtime >= 1) {
    timeresult = `${Math.floor(tinhtime)} phút trước`;
  } else {
    timeresult = `${tinhtime * 60} giây trước`;
  }
  return timeresult;
}

let hotfoods = document.getElementById("hotfoods");
function setboxhot() {
  hotfoods.innerHTML = `<div class="tagnew" id='taghot'>Xem<br>nhiều</div>
  <i class="fas fa-tag"></i>
<div class="newfoodx" id="hotfood1">
    <i class="far fa-bookmark bm1" title='Lưu món' id="hottagsave1"></i>
    <div class="miniimage" id="hotimage1" style="background-image: url('${
      allfoods[xepid[0]].foodimage
    }');"></div>
    <div class="mininame" id="hotname1">${allfoods[xepid[0]].foodname}</div>
    <div class="minitime" id="hottime1">${caltime(
      allfoods[xepid[0]].foodtime
    )}</div>
    <div class="miniview" id="hotview1">${
      allfoods[xepid[0]].views
    } lượt xem</div>
    <div class="minilike" id="hotlike1"><i class="fas fa-heart"></i> ${
      allfoods[xepid[0]].like.length
    }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
    allfoods[xepid[0]].dislike.length
  }</div>
    <div class="miniid" id="hotid1">${allfoods[xepid[0]].foodid}</div></div
>
<div class="newfoodx" id="hotfood2">
    <i class="far fa-bookmark bm1" title='Lưu món' id="hottagsave2"></i>
    <div class="miniimage" id="hotimage2" style="background-image: url('${
      allfoods[xepid[1]].foodimage
    }');"></div>
    <div class="mininame" id="hotname2">${allfoods[xepid[1]].foodname}</div>
    <div class="minitime" id="hottime2">${caltime(
      allfoods[xepid[1]].foodtime
    )}</div>
    <div class="miniview" id="hotview2">${
      allfoods[xepid[1]].views
    } lượt xem</div>
    <div class="minilike" id="hotlike2"><i class="fas fa-heart"></i> ${
      allfoods[xepid[1]].like.length
    }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
    allfoods[xepid[1]].dislike.length
  }</div>
    <div class="miniid" id="hotid2">${allfoods[xepid[1]].foodid}</div></div
>
<div class="newfoodx" id="hotfood3">
    <i class="far fa-bookmark bm1" title='Lưu món' id="hottagsave3"></i>
    <div class="miniimage" id="hotimage3" style="background-image: url('${
      allfoods[xepid[2]].foodimage
    }');"></div>
    <div class="mininame" id="hotname3">${allfoods[xepid[2]].foodname}</div>
    <div class="minitime" id="hottime3">${caltime(
      allfoods[xepid[2]].foodtime
    )}</div>
    <div class="miniview" id="hotview3">${
      allfoods[xepid[2]].views
    } lượt xem</div>
    <div class="minilike" id="hotlike3"><i class="fas fa-heart"></i> ${
      allfoods[xepid[2]].like.length
    }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
    allfoods[xepid[2]].dislike.length
  }</div>
    <div class="miniid" id="hotid3">${allfoods[xepid[2]].foodid}</div></div
>
<div class="newfoodx" id="hotfood4">
    <i class="far fa-bookmark bm1" title='Lưu món' id="hottagsave4"></i>
    <div class="miniimage" id="hotimage4" style="background-image: url('${
      allfoods[xepid[3]].foodimage
    }');"></div>
    <div class="mininame" id="hotname4">${allfoods[xepid[3]].foodname}</div>
    <div class="minitime" id="hottime4">${caltime(
      allfoods[xepid[3]].foodtime
    )}</div>
    <div class="miniview" id="hotview4">${
      allfoods[xepid[3]].views
    } lượt xem</div>
    <div class="minilike" id="hotlike4"><i class="fas fa-heart"></i> ${
      allfoods[xepid[3]].like.length
    }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
    allfoods[xepid[3]].dislike.length
  }</div>
    <div class="miniid" id="hotid4">${allfoods[xepid[3]].foodid}</div></div
>`;
}
setboxhot();
let hotfood1 = document.getElementById("hotfood1");
let hotfood2 = document.getElementById("hotfood2");
let hotfood3 = document.getElementById("hotfood3");
let hotfood4 = document.getElementById("hotfood4");
let hottagsave1 = document.getElementById("hottagsave1");
let hottagsave2 = document.getElementById("hottagsave2");
let hottagsave3 = document.getElementById("hottagsave3");
let hottagsave4 = document.getElementById("hottagsave4");

function setbmhotfood() {
  for (let z of account) {
    if (z.username == nowuser) {
      if (z.savemenu.indexOf(xepid[0]) !== -1) {
        hottagsave1.classList = `fas fa-bookmark bm2`;
        hottagsave1.title = "Đã lưu";
      } else {
        hottagsave1.classList = `far fa-bookmark bm1`;
        hottagsave1.title = "Lưu món";
      }
      if (z.savemenu.indexOf(xepid[1]) !== -1) {
        hottagsave2.classList = `fas fa-bookmark bm2`;
        hottagsave2.title = "Đã lưu";
      } else {
        hottagsave2.classList = `far fa-bookmark bm1`;
        hottagsave2.title = "Lưu món";
      }
      if (z.savemenu.indexOf(xepid[2]) !== -1) {
        hottagsave3.classList = `fas fa-bookmark bm2`;
        hottagsave3.title = "Đã lưu";
      } else {
        hottagsave3.classList = `far fa-bookmark bm1`;
        hottagsave3.title = "Lưu món";
      }
      if (z.savemenu.indexOf(xepid[3]) !== -1) {
        hottagsave4.classList = `fas fa-bookmark bm2`;
        hottagsave4.title = "Đã lưu";
      } else {
        hottagsave4.classList = `far fa-bookmark bm1`;
        hottagsave4.title = "Lưu món";
      }
    }
  }
}

setbmhotfood();

hotfood1.addEventListener("click", gochitiet);
hotfood2.addEventListener("click", gochitiet);
hotfood3.addEventListener("click", gochitiet);
hotfood4.addEventListener("click", gochitiet);
hottagsave1.addEventListener("click", bookmark);
hottagsave2.addEventListener("click", bookmark);
hottagsave3.addEventListener("click", bookmark);
hottagsave4.addEventListener("click", bookmark);

function gochitiet() {
  if (this.id == `hotfood1`) {
    localStorage.setItem("viewfood", `${xepid[0]}`);
    location.href = "monchitiet.html";
  } else if (this.id == `hotfood2`) {
    localStorage.setItem("viewfood", `${xepid[1]}`);
    location.href = "monchitiet.html";
  } else if (this.id == `hotfood3`) {
    localStorage.setItem("viewfood", `${xepid[2]}`);
    location.href = "monchitiet.html";
  } else if (this.id == `hotfood4`) {
    localStorage.setItem("viewfood", `${xepid[3]}`);
    location.href = "monchitiet.html";
  }
}


let tagnew = document.getElementById("tagnew");
let taghot = document.getElementById("taghot");

tagnew.addEventListener("click", tagnewclick);
taghot.addEventListener("click", taghotclick);

function tagnewclick() {
  location.href = "search.html";
  localStorage.setItem("taskfindwhat", ``);
  localStorage.setItem("taskfind", `findnew`);
}
function taghotclick() {
  location.href = "search.html";
  localStorage.setItem("taskfindwhat", ``);
  localStorage.setItem("taskfind", `findview`);
}


// likefoods

let xeplike = [];
for (let x of allfoods) {
  xeplike.push(x.like.length);
}
xeplike.sort(function (a, b) {
  return b - a;
});
console.log(xeplike);
let xepidxx = [];
let xepid2 = [];
for (let x of allfoods) {
  xepidxx.push(x.foodid);
}
console.log(xepidxx);
for (let i = 0; i <= xeplike.length - 1; i++) {
  for (let ii = 0; ii < xepidxx.length; ii++) {
    if (allfoods[xepidxx[ii]].like.length == xeplike[i]) {
      xepid2.push(xepidxx[ii]);
      xepidxx.splice(ii, 1);
      console.log(xepidxx);
      break;
    }
  }
}
console.log(xepid2);
// function caltime(x) {
//   let timeresult = "";
//   let tinhtime = (new Date() - x) / (1000 * 60);
//   if (tinhtime > 60 * 24 * 365) {
//     timeresult = `${Math.floor(tinhtime / (60 * 24 * 365))} năm trước`;
//   } else if (tinhtime > 60 * 24 * 30) {
//     timeresult = `${Math.floor(tinhtime / (60 * 24 * 30))} tháng trước`;
//   } else if (tinhtime > 60 * 24) {
//     timeresult = `${Math.floor(tinhtime / (60 * 24))} ngày trước`;
//   } else if (tinhtime > 60) {
//     timeresult = `${Math.floor(tinhtime / 60)} giờ trước`;
//   } else if (tinhtime >= 1) {
//     timeresult = `${Math.floor(tinhtime)} phút trước`;
//   } else {
//     timeresult = `${tinhtime * 60} giây trước`;
//   }
//   return timeresult;
// }

let likefoods = document.getElementById("likefoods");
function setboxlike() {
  likefoods.innerHTML = `<div class="tagnew" id='taglike'>Yêu thích</div>
  <i class="fas fa-tag"></i>
<div class="newfoodx" id="likefood1">
    <i class="far fa-bookmark bm1" title='Lưu món' id="liketagsave1"></i>
    <div class="miniimage" id="likeimage1" style="background-image: url('${
      allfoods[xepid2[0]].foodimage
    }');"></div>
    <div class="mininame" id="likename1">${allfoods[xepid2[0]].foodname}</div>
    <div class="minitime" id="liketime1">${caltime(
      allfoods[xepid2[0]].foodtime
    )}</div>
    <div class="miniview" id="likeview1">${
      allfoods[xepid2[0]].views
    } lượt xem</div>
    <div class="minilike" id="likelike1"><i class="fas fa-heart"></i> ${
      allfoods[xepid2[0]].like.length
    }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
    allfoods[xepid2[0]].dislike.length
  }</div>
    <div class="miniid" id="likeid1">${allfoods[xepid2[0]].foodid}</div></div
>
<div class="newfoodx" id="likefood2">
    <i class="far fa-bookmark bm1" title='Lưu món' id="liketagsave2"></i>
    <div class="miniimage" id="likeimage2" style="background-image: url('${
      allfoods[xepid2[1]].foodimage
    }');"></div>
    <div class="mininame" id="likename2">${allfoods[xepid2[1]].foodname}</div>
    <div class="minitime" id="liketime2">${caltime(
      allfoods[xepid2[1]].foodtime
    )}</div>
    <div class="miniview" id="likeview2">${
      allfoods[xepid2[1]].views
    } lượt xem</div>
    <div class="minilike" id="likelike2"><i class="fas fa-heart"></i> ${
      allfoods[xepid2[1]].like.length
    }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
    allfoods[xepid2[1]].dislike.length
  }</div>
    <div class="miniid" id="likeid2">${allfoods[xepid2[1]].foodid}</div></div
>
<div class="newfoodx" id="likefood3">
    <i class="far fa-bookmark bm1" title='Lưu món' id="liketagsave3"></i>
    <div class="miniimage" id="likeimage3" style="background-image: url('${
      allfoods[xepid2[2]].foodimage
    }');"></div>
    <div class="mininame" id="likename3">${allfoods[xepid2[2]].foodname}</div>
    <div class="minitime" id="liketime3">${caltime(
      allfoods[xepid2[2]].foodtime
    )}</div>
    <div class="miniview" id="likeview3">${
      allfoods[xepid2[2]].views
    } lượt xem</div>
    <div class="minilike" id="likelike3"><i class="fas fa-heart"></i> ${
      allfoods[xepid2[2]].like.length
    }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
    allfoods[xepid2[2]].dislike.length
  }</div>
    <div class="miniid" id="likeid3">${allfoods[xepid2[2]].foodid}</div></div
>
<div class="newfoodx" id="likefood4">
    <i class="far fa-bookmark bm1" title='Lưu món' id="liketagsave4"></i>
    <div class="miniimage" id="likeimage4" style="background-image: url('${
      allfoods[xepid2[3]].foodimage
    }');"></div>
    <div class="mininame" id="likename4">${allfoods[xepid2[3]].foodname}</div>
    <div class="minitime" id="liketime4">${caltime(
      allfoods[xepid2[3]].foodtime
    )}</div>
    <div class="miniview" id="likeview4">${
      allfoods[xepid2[3]].views
    } lượt xem</div>
    <div class="minilike" id="likelike4"><i class="fas fa-heart"></i> ${
      allfoods[xepid2[3]].like.length
    }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
    allfoods[xepid2[3]].dislike.length
  }</div>
    <div class="miniid" id="likeid4">${allfoods[xepid2[3]].foodid}</div></div
>`;
}
setboxlike();
let likefood1 = document.getElementById("likefood1");
let likefood2 = document.getElementById("likefood2");
let likefood3 = document.getElementById("likefood3");
let likefood4 = document.getElementById("likefood4");
let liketagsave1 = document.getElementById("liketagsave1");
let liketagsave2 = document.getElementById("liketagsave2");
let liketagsave3 = document.getElementById("liketagsave3");
let liketagsave4 = document.getElementById("liketagsave4");

function setbmlikefood() {
  for (let z of account) {
    if (z.username == nowuser) {
      if (z.savemenu.indexOf(xepid2[0]) !== -1) {
        liketagsave1.classList = `fas fa-bookmark bm2`;
        liketagsave1.title = "Đã lưu";
      } else {
        liketagsave1.classList = `far fa-bookmark bm1`;
        liketagsave1.title = "Lưu món";
      }
      if (z.savemenu.indexOf(xepid2[1]) !== -1) {
        liketagsave2.classList = `fas fa-bookmark bm2`;
        liketagsave2.title = "Đã lưu";
      } else {
        liketagsave2.classList = `far fa-bookmark bm1`;
        liketagsave2.title = "Lưu món";
      }
      if (z.savemenu.indexOf(xepid2[2]) !== -1) {
        liketagsave3.classList = `fas fa-bookmark bm2`;
        liketagsave3.title = "Đã lưu";
      } else {
        liketagsave3.classList = `far fa-bookmark bm1`;
        liketagsave3.title = "Lưu món";
      }
      if (z.savemenu.indexOf(xepid2[3]) !== -1) {
        liketagsave4.classList = `fas fa-bookmark bm2`;
        liketagsave4.title = "Đã lưu";
      } else {
        liketagsave4.classList = `far fa-bookmark bm1`;
        liketagsave4.title = "Lưu món";
      }
    }
  }
}

setbmlikefood();

likefood1.addEventListener("click", gochitiet2);
likefood2.addEventListener("click", gochitiet2);
likefood3.addEventListener("click", gochitiet2);
likefood4.addEventListener("click", gochitiet2);
liketagsave1.addEventListener("click", bookmark2);
liketagsave2.addEventListener("click", bookmark2);
liketagsave3.addEventListener("click", bookmark2);
liketagsave4.addEventListener("click", bookmark2);

function gochitiet2() {
  if (this.id == `likefood1`) {
    localStorage.setItem("viewfood", `${xepid2[0]}`);
    location.href = "monchitiet.html";
  } else if (this.id == `likefood2`) {
    localStorage.setItem("viewfood", `${xepid2[1]}`);
    location.href = "monchitiet.html";
  } else if (this.id == `likefood3`) {
    localStorage.setItem("viewfood", `${xepid2[2]}`);
    location.href = "monchitiet.html";
  } else if (this.id == `likefood4`) {
    localStorage.setItem("viewfood", `${xepid2[3]}`);
    location.href = "monchitiet.html";
  }
}
function bookmark2(event) {
  event.stopPropagation();
  if (this.id == `liketagsave1`) {
    for (let x of account) {
      if (x.username == nowuser) {
        if (x.savemenu.indexOf(xepid2[0]) == -1) {
          x.savemenu.push(xepid2[0]);
          liketagsave1.classList = `fas fa-bookmark bm2`;
          liketagsave1.title = "Đã lưu";
        } else {
          x.savemenu.splice(x.savemenu.indexOf(xepid2[0]), 1);
          liketagsave1.classList = `far fa-bookmark bm1`;
          liketagsave1.title = "Lưu món";
        }
      }
    }
  } else if (this.id == `liketagsave2`) {
    for (let x of account) {
      if (x.username == nowuser) {
        if (x.savemenu.indexOf(xepid2[1]) == -1) {
          x.savemenu.push(xepid2[1]);
          liketagsave2.classList = `fas fa-bookmark bm2`;
          liketagsave2.title = "Đã lưu";
        } else {
          x.savemenu.splice(x.savemenu.indexOf(xepid2[1]), 1);
          liketagsave2.classList = `far fa-bookmark bm1`;
          liketagsave2.title = "Lưu món";
        }
      }
    }
  } else if (this.id == `liketagsave3`) {
    for (let x of account) {
      if (x.username == nowuser) {
        if (x.savemenu.indexOf(xepid2[2]) == -1) {
          x.savemenu.push(xepid2[2]);
          liketagsave3.classList = `fas fa-bookmark bm2`;
          liketagsave3.title = "Đã lưu";
        } else {
          x.savemenu.splice(x.savemenu.indexOf(xepid2[2]), 1);
          liketagsave3.classList = `far fa-bookmark bm1`;
          liketagsave3.title = "Lưu món";
        }
      }
    }
  } else if (this.id == `liketagsave4`) {
    for (let x of account) {
      if (x.username == nowuser) {
        if (x.savemenu.indexOf(xepid2[3]) == -1) {
          x.savemenu.push(xepid2[3]);
          liketagsave4.classList = `fas fa-bookmark bm2`;
          liketagsave4.title = "Đã lưu";
        } else {
          x.savemenu.splice(x.savemenu.indexOf(xepid2[3]), 1);
          liketagsave4.classList = `far fa-bookmark bm1`;
          liketagsave4.title = "Lưu món";
        }
      }
    }
  }
  localStorage.setItem("saveaccount", `${JSON.stringify(account)}`);
  setbmlikefood();
  boxnewfood();
  setbmhotfood();
}

let taglike = document.getElementById("taglike");


taglike.addEventListener("click", taglikeclick);

function taglikeclick() {
  location.href = "search.html";
  localStorage.setItem("taskfindwhat", ``);
  localStorage.setItem("taskfind", `findlike`);
}

//bookmark new

for (let bm of allbookmarkhome) {
  bm.addEventListener("click", setbm);
}
function setbm(event) {
  event.stopPropagation();
  for (let x of account) {
    if (x.username == nowuser) {
      if (
        x.savemenu.indexOf(
          sortbookmark[allbookmarkhome.indexOf(event.target)]
        ) == -1
      ) {
        x.savemenu.push(sortbookmark[allbookmarkhome.indexOf(event.target)]);
      } else {
        x.savemenu.splice(
          x.savemenu.indexOf(
            sortbookmark[allbookmarkhome.indexOf(event.target)]
          ),
          1
        );
      }
    }
  }
  localStorage.setItem("saveaccount", `${JSON.stringify(account)}`);
  boxnewfood();
  setbmhotfood();
  setbmlikefood();
}

// bookmark hot
function bookmark(event) {
  event.stopPropagation();
  if (this.id == `hottagsave1`) {
    for (let x of account) {
      if (x.username == nowuser) {
        if (x.savemenu.indexOf(xepid[0]) == -1) {
          x.savemenu.push(xepid[0]);
          hottagsave1.classList = `fas fa-bookmark bm2`;
          hottagsave1.title = "Đã lưu";
        } else {
          x.savemenu.splice(x.savemenu.indexOf(xepid[0]), 1);
          hottagsave1.classList = `far fa-bookmark bm1`;
          hottagsave1.title = "Lưu món";
        }
      }
    }
  } else if (this.id == `hottagsave2`) {
    for (let x of account) {
      if (x.username == nowuser) {
        if (x.savemenu.indexOf(xepid[1]) == -1) {
          x.savemenu.push(xepid[1]);
          hottagsave2.classList = `fas fa-bookmark bm2`;
          hottagsave2.title = "Đã lưu";
        } else {
          x.savemenu.splice(x.savemenu.indexOf(xepid[1]), 1);
          hottagsave2.classList = `far fa-bookmark bm1`;
          hottagsave2.title = "Lưu món";
        }
      }
    }
  } else if (this.id == `hottagsave3`) {
    for (let x of account) {
      if (x.username == nowuser) {
        if (x.savemenu.indexOf(xepid[2]) == -1) {
          x.savemenu.push(xepid[2]);
          hottagsave3.classList = `fas fa-bookmark bm2`;
          hottagsave3.title = "Đã lưu";
        } else {
          x.savemenu.splice(x.savemenu.indexOf(xepid[2]), 1);
          hottagsave3.classList = `far fa-bookmark bm1`;
          hottagsave3.title = "Lưu món";
        }
      }
    }
  } else if (this.id == `hottagsave4`) {
    for (let x of account) {
      if (x.username == nowuser) {
        if (x.savemenu.indexOf(xepid[3]) == -1) {
          x.savemenu.push(xepid[3]);
          hottagsave4.classList = `fas fa-bookmark bm2`;
          hottagsave4.title = "Đã lưu";
        } else {
          x.savemenu.splice(x.savemenu.indexOf(xepid[3]), 1);
          hottagsave4.classList = `far fa-bookmark bm1`;
          hottagsave4.title = "Lưu món";
        }
      }
    }
  }
  localStorage.setItem("saveaccount", `${JSON.stringify(account)}`);
  setbmhotfood();
  boxnewfood();
  setbmlikefood();
}