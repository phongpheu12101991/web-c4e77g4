account = JSON.parse(localStorage.getItem("saveaccount"));

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
      location.href = "home.html";
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
