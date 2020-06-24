let allfoods;

if (localStorage.getItem("saveallfoods") !== null) {
  allfoods = JSON.parse(localStorage.getItem("saveallfoods"));
}
for (let x of allfoods) {
  x.foodtime = new Date(x.foodtime.split(" "));
}

let nowuser = localStorage.getItem("logged");
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
