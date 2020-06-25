if (localStorage.getItem("saveallfoods") !== null) {
  allfoods = JSON.parse(localStorage.getItem("saveallfoods"));
  for (let x of allfoods) {
    x.foodtime = new Date(x.foodtime.split(" "));
  }
}
if (localStorage.getItem("saveaccount") !== null) {
  account = JSON.parse(localStorage.getItem("saveaccount"));
}

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
  console.log(xeptime);
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
      allminitime[x].innerText = `${calcutime * 60} giây trước`;
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

console.log(allfoods);

// link to monchitiet

document.querySelectorAll(".newfoodx").forEach((item) => {
  item.addEventListener("click", (event) => {
    location.href = "monchitiet.html";
  });
});

//bookmark

for (let bm of allbookmarkhome) {
  bm.addEventListener("click", setbm);
}
function setbm(event) {

  event.stopPropagation()
  for (let x of account) {
    if (x.username == nowuser) {
      if (
        x.savemenu.indexOf(sortbookmark[allbookmarkhome.indexOf(event.target)]) == -1
      ) {
        x.savemenu.push(sortbookmark[allbookmarkhome.indexOf(event.target)]);
      } else {
        x.savemenu.splice(
          x.savemenu.indexOf(sortbookmark[allbookmarkhome.indexOf(event.target)]),
          1
        );
      }
    }
  }
  localStorage.setItem("saveaccount", `${JSON.stringify(account)}`);
  boxnewfood();

}