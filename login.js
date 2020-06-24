account = JSON.parse(localStorage.getItem("account"));
console.log(account);
let nowuser = localStorage.getItem("logged");
let addfood = document.getElementById("add");
let login = document.getElementById("log-in");
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

let id = document.getElementById("inputname");
let password = document.getElementById("inputpassword");
let login1 = document.getElementById("submitlogin");
login1.addEventListener("click", login2);
function login2() {
  let check = false;
  for (let i = 0; i <= account.length - 1; i++) {
    if (
      id.value == account[i].username &&
      password.value == account[i].password
    ) {
      alert("log-in success");
      localStorage.setItem("logged", `${account[i].username}`);
      // id.value = "";
      // password.value = "";
      location.replace("home.html");
      check = true;
      break;
    }
  }
  if (check == false) {
    alert("Sai tên hoặc mật khẩu");
  }
}

function loginenter(event) {
  if (event.keyCode === 13) {
    login1.click();
  }
}

id.addEventListener("keypress", loginenter);
password.addEventListener("keypress", loginenter);
