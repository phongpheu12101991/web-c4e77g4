
if (localStorage.getItem("saveallfoods") !== null) {
  allfoods = JSON.parse(localStorage.getItem("saveallfoods"));
  for (let x of allfoods) {
    x.foodtime = new Date(x.foodtime.split(" "));
  }
}
if (localStorage.getItem("saveaccount") !== null) {
  account = JSON.parse(localStorage.getItem("saveaccount"));
}


//addnguyenlieu

let namefood = document.getElementById("namefood");
let nguyenlieu = document.getElementById("nguyenlieu");

let addnglieu = document.getElementById("addnglieu");
let buoc1 = document.getElementById("buoc1");
let thembuoc = document.getElementById("thembuoc");
let addanh = document.getElementById("addanh");
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

// let crnewfood = document.getElementById("crnewfoods");
let okadd = document.getElementById("okadd");
okadd.addEventListener("click", creatfood);
function creatfood() {
  let xx = `<ul id="nl${allfoods.length}">`;
  for (let i = 0; i < arrulnl.length; i++) {
    xx = xx + `<li>${arrulnl[i]}</li>`;
  }
  let xxx = xx + `</ul>`;

  let yy = `<ul id="cl${allfoods.length}">`;
  for (let i = 0; i < arrulcl.length; i++) {
    yy = yy + `<li>${arrulcl[i]}</li>`;
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
    foodid: allfoods.length,
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
  });
  console.log(allfoods[allfoods.length - 1]);
  localStorage.setItem("saveallfoods", `${JSON.stringify(allfoods)}`);
}

