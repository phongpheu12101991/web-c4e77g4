if (localStorage.getItem("saveallfoods") !== null) {
  allfoods = JSON.parse(localStorage.getItem("saveallfoods"));
  for (let x of allfoods) {
    x.foodtime = new Date(x.foodtime.split(" "));
  }
}
if (localStorage.getItem("saveaccount") !== null) {
  account = JSON.parse(localStorage.getItem("saveaccount"));
}

let infoname = document.getElementById("infoname");
let infotype = document.getElementById("infotype");
let infomail = document.getElementById("infomail");
let changepass = document.getElementById("changepass");

for (let x of account) {
  if (x.username == nowuser) {
    infoname.innerText = x.username;
    infotype.innerText = x.type.toUpperCase();
    infomail.innerText = `Email: ${x.email}`;
    changepass.innerHTML = `<i class="fas fa-cog"></i> Đổi mật khẩu`;
  }
}

let passs = document.getElementById("passs");
changepass.addEventListener("click", changepw);
function changepw() {
  if (passs.style.visibility == "visible") {
    passs.style.visibility = "hidden";
  } else {
    passs.style.visibility = "visible";
  }
}

let exitt = document.getElementById("exitt");
exitt.addEventListener("click", aaa);
function aaa() {
  passs.style.visibility = "hidden";
}

let hh1 = document.getElementById("hh1");
let hh2 = document.getElementById("hh2");
let ulsave = document.getElementById("ulsave");
let ulcreat = document.getElementById("ulcreat");

hh1.addEventListener("click", printulsave);
hh2.addEventListener("click", printulcreat);

function printulsave() {
  if (ulsave.innerHTML == "") {
    let lisave = [];
    let liname = "";
    for (let x of account) {
      if (x.username == nowuser) {
        for (let i = 0; i < x.savemenu.length; i++) {
          liname = allfoods[x.savemenu[i]].foodname;
          if (liname.length > 30) {
            liname = liname.slice(0, 30) + "...";
          }
          lisave = `<li class='lisavemenu' id='${
            allfoods[x.savemenu[i]].foodname
          }'>${liname}</li>`;
          ulsave.innerHTML = ulsave.innerHTML + lisave;
        }
      }
    }
  } else if (ulsave.innerHTML !== "") {
    ulsave.innerHTML = "";
  }
  clicktochitiet();
}

function clicktochitiet() {
  document.querySelectorAll(".lisavemenu").forEach((item) => {
    item.addEventListener("click", (event) => {
      for (let x of allfoods) {
        if (x.foodname == item.id) {
          location.href = "monchitiet.html";
          localStorage.setItem("viewfood", `${x.foodid}`);
        }
      }
    });
  });
}
clicktochitiet();

function printulcreat() {
  if (ulcreat.innerHTML == "") {
    let licreat = [];
    let liname = "";
    for (let x of allfoods) {
      if (x.creator == nowuser) {
        liname = x.foodname;
        if (liname.length > 30) {
          liname = liname.slice(0, 30) + "...";
        }
        licreat = `<li class='lisavemenu' id='${x.foodname}'>${liname}</li>`;
        ulcreat.innerHTML = ulcreat.innerHTML + licreat;
      }
    }
  } else if (ulcreat.innerHTML !== "") {
    ulcreat.innerHTML = "";
  }
  clicktochitiet();
}

// change pass

let oldpass = document.getElementById("oldpass");
let newpass = document.getElementById("newpass");
let newpass2 = document.getElementById("newpass2");

let okchange = document.getElementById("okchange");
let alertx = document.getElementById("alertx");

okchange.addEventListener("click", okchangepass);
function okchangepass() {
  for (let x of account) {
    if (x.username == nowuser) {
      if (oldpass.value !== x.password) {
        alertx.innerText = "**Mật khẩu cũ không đúng";
      } else if (
        oldpass.value == x.password &&
        newpass.value == oldpass.value &&
        newpass.value !== ""
      ) {
        alertx.innerText = "**Mật khẩu mới phải khác mật khẩu cũ";
      } else if (
        oldpass.value == x.password &&
        newpass.value !== newpass2.value
      ) {
        alertx.innerText = "**Xin xác nhận lại mật khẩu";
      } else if (oldpass.value == x.password && newpass.value == "") {
        alertx.innerText = "**Bạn chưa điền mật khẩu mới";
      } else if (
        oldpass.value == x.password &&
        newpass.value == newpass2.value
      ) {
        x.password = newpass.value;
        alert("Đổi mật khẩu thành công!");
        passs.style.visibility = "hidden";
        oldpass.value = "";
        newpass2.value = "";
        newpass.value = "";
        localStorage.setItem("saveaccount", `${JSON.stringify(account)}`);
      }
    }
  }
}

passs.addEventListener("keypress", gookchangepass);
function gookchangepass(event) {
  if (event.keyCode === 13) {
    okchange.click();
  }
}
