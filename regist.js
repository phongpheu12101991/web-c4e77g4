// let account = [
//   {
//     acc: "admin",
//     pass: "123456",
//   },
// ];
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

const newname = document.getElementById("familyname");
const inputEmail = document.getElementById("inputemail");
const inputPassword = document.getElementById("inputpassword");
const inputPassword2 = document.getElementById("inputpassword2");

let submitregist = document.getElementById("submitregist");
submitregist.addEventListener("click", onClickEvent);
// account = JSON.parse(localStorage.getItem("account"));

function onClickEvent() {
  a = newname.value;
  b = inputEmail.value;
  c = inputPassword.value;
  d = inputPassword2.value;

  if (a === "") {
    alert("type your email");
  } else if (b === "") {
    alert("type your password");
  } else if (c === "") {
    alert("type you password again");
  } else if (d === "") {
    alert("type your name");
  } else if (c !== d) {
    alert("Xác nhận mật khẩu sai");
  } else if (c === d) {
    let checkname = true;
    for (let i of account) {
      if (i.username === a) {
        checkname = false;

        alert(`Tên trùng. Hãy nhập tên khác`);
        break;
      }
    }
    let checkmail = true;
    for (let i of account) {
      if (i.email === b) {
        checkmail = false;
        alert(`Mail trùng. Hãy nhập mail khác`);
        break;
      }
    }
    if (checkmail === true && checkname === true) {
      alert("Thành công");
      account.push({
        username: newname.value,
        password: inputPassword.value,
        email: inputEmail.value,
        type: "user",
      });
      localStorage.setItem("account", `${JSON.stringify(account)}`);
    }
  }

  console.log(account);

  inputEmail.value = "";
  inputPassword.value = "";
  inputPassword2.value = "";
}

account = JSON.parse(localStorage.getItem("account"));
console.log(account);
/// đăng ký tài khoản

/// đăng nhập tài khoản
// let id = document.getElementById("inputname");
// let password = document.getElementById("inputpassword");
// let login1 = document.getElementById("submitlogin");
// login1.addEventListener("click", login);
// function login() {
//   for (let i = 0; i <= account.length - 1; i++) {
//     if (
//       id.value == account[i].username &&
//       password.value == account[i].password
//     ) {
//       alert("log-in success");
//       localStorage.setItem("logged", `${account[i].username}`);
//       // id.value = "";
//       // password.value = "";
//       location.replace("home.html");
//       break;
//     }
//   }
// }
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
