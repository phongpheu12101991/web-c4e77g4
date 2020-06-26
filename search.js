if (localStorage.getItem("saveallfoods") !== null) {
  allfoods = JSON.parse(localStorage.getItem("saveallfoods"));
  for (let x of allfoods) {
    x.foodtime = new Date(x.foodtime.split(" "));
  }
}
if (localStorage.getItem("saveaccount") !== null) {
  account = JSON.parse(localStorage.getItem("saveaccount"));
}

let typetime = document.getElementById("typetime");
let typeview = document.getElementById("typeview");
let typelike = document.getElementById("typelike");
let typesort = document.getElementById("typesort");
typesort.addEventListener("click", sorting);
typetime.addEventListener("click", changetime);
typeview.addEventListener("click", changeview);
typelike.addEventListener("click", changelike);
let taskfind = localStorage.getItem("taskfind");
let taskfindwhat = localStorage.getItem("taskfindwhat").toLowerCase();

let hmsearch = document.getElementById("hmsearch");

function setbutton() {
  if (taskfind == "findnew") {
    typetime.style.border = `solid black 1px`;
    typeview.style.border = `solid white 1px`;
    typelike.style.border = `solid white 1px`;
    typesort.innerHTML = `Giảm dần &ensp;<i class="fas fa-sort"></i>`;
  } else if (taskfind == "findview") {
    typeview.style.border = `solid black 1px`;
    typetime.style.border = `solid white 1px`;
    typelike.style.border = `solid white 1px`;
    typesort.innerHTML = `Giảm dần &ensp;<i class="fas fa-sort"></i>`;
  } else if (taskfind == "findold") {
    typetime.style.border = `solid black 1px`;
    typeview.style.border = `solid white 1px`;
    typelike.style.border = `solid white 1px`;
    typesort.innerHTML = `Tăng dần &ensp;<i class="fas fa-sort"></i>`;
  } else if (taskfind == "findviewlow") {
    typeview.style.border = `solid black 1px`;
    typetime.style.border = `solid white 1px`;
    typelike.style.border = `solid white 1px`;
    typesort.innerHTML = `Tăng dần &ensp;<i class="fas fa-sort"></i>`;
  } else if (taskfind == "findlike") {
    typelike.style.border = `solid black 1px`;
    typeview.style.border = `solid white 1px`;
    typetime.style.border = `solid white 1px`;
    typesort.innerHTML = `Giảm dần &ensp;<i class="fas fa-sort"></i>`;
  } else if (taskfind == "findlikelow") {
    typelike.style.border = `solid black 1px`;
    typeview.style.border = `solid white 1px`;
    typetime.style.border = `solid white 1px`;
    typesort.innerHTML = `Tăng dần &ensp;<i class="fas fa-sort"></i>`;
  }
}
setbutton();

let allfoodscopy = [];
function searchresult() {
  if (taskfind == "findnew") {
    for (let i = allfoodscopy.length - 1; i >= 0; i--) {
      let findfoods = `<div class="viewsearch">
      <div class="viewsearchimage" style="background-image: url('${allfoodscopy[i].foodimage}');"></div>
      <div class="viewsearchname"><h1>${allfoodscopy[i].foodname}</h1></div>
      <div class="viewsearchcreator">Đăng bởi: ${allfoodscopy[i].creator}</div>
      <div class="viewsearchtime">Ngày đăng: ${allfoodscopy[i].foodtime}</div>
      <div class="viewsearchlike"><i class="fas fa-heart"></i> ${allfoodscopy[i].like.length}&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${allfoodscopy[i].dislike.length}</div>
      <div class="viewsearchview">Lượt xem: ${allfoodscopy[i].views}</div>
    </div>`;
      hmsearch.innerHTML = hmsearch.innerHTML + findfoods;
    }
  } else if (taskfind == "findold") {
    for (let i = 0; i <= allfoodscopy.length - 1; i++) {
      let findfoods = `<div class="viewsearch">
      <div class="viewsearchimage" style="background-image: url('${allfoodscopy[i].foodimage}');"></div>
      <div class="viewsearchname"><h1>${allfoodscopy[i].foodname}</h1></div>
      <div class="viewsearchcreator">Đăng bởi: ${allfoodscopy[i].creator}</div>
      <div class="viewsearchtime">Ngày đăng: ${allfoodscopy[i].foodtime}</div>
      <div class="viewsearchlike"><i class="fas fa-heart"></i> ${allfoodscopy[i].like.length}&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${allfoodscopy[i].dislike.length}</div>
      <div class="viewsearchview">Lượt xem: ${allfoodscopy[i].views}</div>
    </div>`;
      hmsearch.innerHTML = hmsearch.innerHTML + findfoods;
    }
  } else if (taskfind == "findview") {
    let xepview = [];
    for (let x of allfoodscopy) {
      xepview.push(x.views);
    }

    xepview.sort(function (a, b) {
      return b - a;
    });

    console.log(xepview);
    let xepid = [];
    for (let x of allfoodscopy) {
      xepid.push(x.foodid);
    }
    console.log(xepid);
    for (let i = 0; i <= xepview.length - 1; i++) {
      for (let ii = 0; ii < xepid.length; ii++) {
        console.log(allfoodscopy[6]);
        if (allfoodscopy[xepid[ii]].views == xepview[i]) {
          let findfoods = `<div class="viewsearch">
      <div class="viewsearchimage" style="background-image: url('${
        allfoodscopy[xepid[ii]].foodimage
      }');"></div>
      <div class="viewsearchname"><h1>${
        allfoodscopy[xepid[ii]].foodname
      }</h1></div>
      <div class="viewsearchcreator">Đăng bởi: ${
        allfoodscopy[xepid[ii]].creator
      }</div>
      <div class="viewsearchtime">Ngày đăng: ${
        allfoodscopy[xepid[ii]].foodtime
      }</div>
      <div class="viewsearchlike"><i class="fas fa-heart"></i> ${
        allfoodscopy[xepid[ii]].like.length
      }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
            allfoodscopy[xepid[ii]].dislike.length
          }</div>
      <div class="viewsearchview">Lượt xem: ${
        allfoodscopy[xepid[ii]].views
      }</div>
    </div>`;
          hmsearch.innerHTML = hmsearch.innerHTML + findfoods;
          xepid.splice(ii, 1);
          console.log(xepid);
          break;
        }
      }
    }
  } else if (taskfind == "findviewlow") {
    let xepview = [];
    for (let x of allfoodscopy) {
      xepview.push(x.views);
    }
    xepview.sort(function (a, b) {
      return a - b;
    });
    console.log(xepview);
    let xepid = [];
    for (let x of allfoodscopy) {
      xepid.push(x.foodid);
    }
    console.log(xepid);
    for (let i = 0; i <= xepview.length - 1; i++) {
      for (let ii = 0; ii < xepid.length; ii++) {
        if (allfoodscopy[xepid[ii]].views == xepview[i]) {
          let findfoods = `<div class="viewsearch">
      <div class="viewsearchimage" style="background-image: url('${
        allfoodscopy[xepid[ii]].foodimage
      }');"></div>
      <div class="viewsearchname"><h1>${
        allfoodscopy[xepid[ii]].foodname
      }</h1></div>
      <div class="viewsearchcreator">Đăng bởi: ${
        allfoodscopy[xepid[ii]].creator
      }</div>
      <div class="viewsearchtime">Ngày đăng: ${
        allfoodscopy[xepid[ii]].foodtime
      }</div>
      <div class="viewsearchlike"><i class="fas fa-heart"></i> ${
        allfoodscopy[xepid[ii]].like.length
      }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
            allfoodscopy[xepid[ii]].dislike.length
          }</div>
      <div class="viewsearchview">Lượt xem: ${
        allfoodscopy[xepid[ii]].views
      }</div>
    </div>`;
          hmsearch.innerHTML = hmsearch.innerHTML + findfoods;
          xepid.splice(ii, 1);
          console.log(xepid);
          break;
        }
      }
    }
  } else if (taskfind == "findlike") {
    let xeplike = [];
    for (let x of allfoodscopy) {
      xeplike.push(x.like.length);
    }
    xeplike.sort(function (a, b) {
      return b - a;
    });
    console.log(xeplike);
    let xepid = [];
    for (let x of allfoodscopy) {
      xepid.push(x.foodid);
    }
    console.log(xepid);
    for (let i = 0; i <= xeplike.length - 1; i++) {
      for (let ii = 0; ii < xepid.length; ii++) {
        if (allfoodscopy[xepid[ii]].like.length == xeplike[i]) {
          let findfoods = `<div class="viewsearch">
      <div class="viewsearchimage" style="background-image: url('${
        allfoodscopy[xepid[ii]].foodimage
      }');"></div>
      <div class="viewsearchname"><h1>${
        allfoodscopy[xepid[ii]].foodname
      }</h1></div>
      <div class="viewsearchcreator">Đăng bởi: ${
        allfoodscopy[xepid[ii]].creator
      }</div>
      <div class="viewsearchtime">Ngày đăng: ${
        allfoodscopy[xepid[ii]].foodtime
      }</div>
      <div class="viewsearchlike"><i class="fas fa-heart"></i> ${
        allfoodscopy[xepid[ii]].like.length
      }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
            allfoodscopy[xepid[ii]].dislike.length
          }</div>
      <div class="viewsearchview">Lượt xem: ${
        allfoodscopy[xepid[ii]].views
      }</div>
    </div>`;
          hmsearch.innerHTML = hmsearch.innerHTML + findfoods;
          xepid.splice(ii, 1);
          console.log(xepid);
          break;
        }
      }
    }
  } else if (taskfind == "findlikelow") {
    let xeplike = [];
    for (let x of allfoodscopy) {
      xeplike.push(x.like.length);
    }
    xeplike.sort(function (a, b) {
      return a - b;
    });
    console.log(xeplike);
    let xepid = [];
    for (let x of allfoodscopy) {
      xepid.push(x.foodid);
    }
    console.log(xepid);
    for (let i = 0; i <= xeplike.length - 1; i++) {
      for (let ii = 0; ii < xepid.length; ii++) {
        if (allfoodscopy[xepid[ii]].like.length == xeplike[i]) {
          let findfoods = `<div class="viewsearch">
      <div class="viewsearchimage" style="background-image: url('${
        allfoodscopy[xepid[ii]].foodimage
      }');"></div>
      <div class="viewsearchname"><h1>${
        allfoodscopy[xepid[ii]].foodname
      }</h1></div>
      <div class="viewsearchcreator">Đăng bởi: ${
        allfoodscopy[xepid[ii]].creator
      }</div>
      <div class="viewsearchtime">Ngày đăng: ${
        allfoodscopy[xepid[ii]].foodtime
      }</div>
      <div class="viewsearchlike"><i class="fas fa-heart"></i> ${
        allfoodscopy[xepid[ii]].like.length
      }&emsp;&emsp;<i class="fas fa-thumbs-down"></i> ${
            allfoodscopy[xepid[ii]].dislike.length
          }</div>
      <div class="viewsearchview">Lượt xem: ${
        allfoodscopy[xepid[ii]].views
      }</div>
    </div>`;
          hmsearch.innerHTML = hmsearch.innerHTML + findfoods;
          xepid.splice(ii, 1);
          console.log(xepid);
          break;
        }
      }
    }
  }
}
if (taskfindwhat == "" || taskfindwhat == null) {
  allfoodscopy = allfoods;
  searchresult();
  setbutton();
} else {
  taskfindwhat.split("");
  for (let x of allfoods) {
    for (let i = 0; i < x.foodname.length; i++) {
      if (
        x.foodname.slice(i, i + taskfindwhat.length).toLowerCase() ==
        taskfindwhat
      ) {
        let y = x;
        y.foodid = allfoodscopy.length;
        allfoodscopy.push(y);
      }
    }
  }
  searchresult();
  setbutton();
}

function sorting() {
  if (taskfind == "findnew") {
    taskfind = "findold";
    typesort.innerHTML = `Tăng dần &ensp;<i class="fas fa-sort"></i>`;
  } else if (taskfind == "findold") {
    taskfind = "findnew";
    typesort.innerHTML = `Giảm dần &ensp;<i class="fas fa-sort"></i>`;
  } else if (taskfind == "findview") {
    taskfind = "findviewlow";
    typesort.innerHTML = `Tăng dần &ensp;<i class="fas fa-sort"></i>`;
  } else if (taskfind == "findviewlow") {
    taskfind = "findview";
    typesort.innerHTML = `Giảm dần &ensp;<i class="fas fa-sort"></i>`;
  } else if (taskfind == "findlike") {
    taskfind = "findlikelow";
    typesort.innerHTML = `Tăng dần &ensp;<i class="fas fa-sort"></i>`;
  } else if (taskfind == "findlikelow") {
    taskfind = "findlike";
    typesort.innerHTML = `Giảm dần &ensp;<i class="fas fa-sort"></i>`;
  }

  hmsearch.innerHTML = "";
  searchresult();
  setbutton();
}

function changetime() {
  taskfind = "findnew";
  hmsearch.innerHTML = "";
  searchresult();
  setbutton();
}

function changeview() {
  taskfind = "findview";
  hmsearch.innerHTML = "";
  searchresult();
  setbutton();
}

function changelike() {
  taskfind = "findlike";
  hmsearch.innerHTML = "";
  searchresult();
  setbutton();
}
