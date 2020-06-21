localStorage.setItem("logged", `phong`);
let nowuser = localStorage.getItem("logged");

let allfoods = [
  {
    foodname: "Trà đào cam sả",
    foodimage: "C:/Users/Admin/Desktop/recipe16934-635979775269411988.jpg",
    foodmaterials:
      '<ul id="nltradaocamsa"><li>Đào : 1 quả</li><hr><li>Đường nước: 30ml</li><hr><li>Trà: 200ml</li><hr><li>Siro đào: 20ml</li><hr><li>Siro sả: 10ml</li><hr><li>Nước cam: 100ml</li><hr><li>Sả: 1 cây</li><hr><li>Đá: vừa đủ</li><hr></ul>',
    foodmaking:
      '<ul id="cltradaocamsa"><li>Đào : Gọt vỏ, cắt miếng</li><hr><li>Cho hỗn hợp đường, siro, trà, nước cam vào bình shake, thêm đá vừa đủ, lắc mạnh</li><hr><li>Cây sả cắt bỏ 2 đầu, đập dập, cam cắt 1 lát</li><hr><li>Đổ toàn bộ ra cốc, cắm cây sả, thêm lát cam và miếng đào để decor, thưởng thức</li><hr></ul>',
    foodtime: new Date(2019, 10, 24, 16, 18, 20),
    creator: `phong`,
    rate: { phong: `3` },
    foodid: 0,
  },
  {
    foodname: "Trà quế cam mật ong",
    foodimage: "C:/Users/Admin/Desktop/recipe16934-635979775269411988.jpg",
    foodmaterials:
      '<ul id="nltradaocamsa"><li>Đào : 1 quả</li><li>Đường nước: 30ml</li><li>Trà: 200ml</li><li>Siro đào: 20ml</li><li>Siro sả: 10ml</li><li>Nước cam: 100ml</li><li>Sả: 1 cây</li><li>Đá: vừa đủ</li></ul>',
    foodmaking:
      '<ul id="cltradaocamsa"><li>Đào : Gọt vỏ, cắt miếng</li><li>Cho hỗn hợp đường, siro, trà, nước cam vào bình shake, thêm đá vừa đủ, lắc mạnh</li><li>Cây sả cắt bỏ 2 đầu, đập dập, cam cắt 1 lát</li><li>Đổ toàn bộ ra cốc, cắm cây sả, thêm lát cam và miếng đào để decor, thưởng thức</li></ul>',
    foodtime: new Date(2019, 11, 24, 16, 18, 20),
    creator: `phong`,
    rate: { phong: `3` },
    foodid: 1,
  },
  {
    foodname: "Trà táo bạc hà",
    foodimage: "C:/Users/Admin/Desktop/recipe16934-635979775269411988.jpg",
    foodmaterials:
      '<ul id="nltradaocamsa"><li>Đào : 1 quả</li><li>Đường nước: 30ml</li><li>Trà: 200ml</li><li>Siro đào: 20ml</li><li>Siro sả: 10ml</li><li>Nước cam: 100ml</li><li>Sả: 1 cây</li><li>Đá: vừa đủ</li></ul>',
    foodmaking:
      '<ul id="cltradaocamsa"><li>Đào : Gọt vỏ, cắt miếng</li><li>Cho hỗn hợp đường, siro, trà, nước cam vào bình shake, thêm đá vừa đủ, lắc mạnh</li><li>Cây sả cắt bỏ 2 đầu, đập dập, cam cắt 1 lát</li><li>Đổ toàn bộ ra cốc, cắm cây sả, thêm lát cam và miếng đào để decor, thưởng thức</li></ul>',
    foodtime: new Date(2019, 5, 20, 16, 18, 20),
    creator: `phong`,
    rate: { phong: `3` },
    foodid: 2,
  },
  {
    foodname: "Trà hạt sen lá nếp",
    foodimage: "C:/Users/Admin/Desktop/recipe16934-635979775269411988.jpg",
    foodmaterials:
      '<ul id="nltradaocamsa"><li>Đào : 1 quả</li><li>Đường nước: 30ml</li><li>Trà: 200ml</li><li>Siro đào: 20ml</li><li>Siro sả: 10ml</li><li>Nước cam: 100ml</li><li>Sả: 1 cây</li><li>Đá: vừa đủ</li></ul>',
    foodmaking:
      '<ul id="cltradaocamsa"><li>Đào : Gọt vỏ, cắt miếng</li><li>Cho hỗn hợp đường, siro, trà, nước cam vào bình shake, thêm đá vừa đủ, lắc mạnh</li><li>Cây sả cắt bỏ 2 đầu, đập dập, cam cắt 1 lát</li><li>Đổ toàn bộ ra cốc, cắm cây sả, thêm lát cam và miếng đào để decor, thưởng thức</li></ul>',
    foodtime: new Date(2019, 4, 22, 16, 18, 20),
    creator: `phong`,
    rate: { phong: `3` },
    foodid: 3,
  },
];

let monchitiet = document.getElementById("monchitiet");

for (let x of allfoods) {
  if (x.foodid == localStorage.getItem("viewfood")) {
    monchitiet.innerHTML = `<div id="minifood">
<h1 id='tenmonchitiet'>${x.foodname}</h1>
<img src="${x.foodimage}" alt="x">
<hr>
<h1>Nguyên liệu:</h1> ${x.foodmaterials}
<h1>Cách làm:</h1>
 ${x.foodmaking}
 <br>
 <h6>Ngày đăng: ${x.foodtime}</h6>
 <h6>Người đăng: ${x.creator}</h6>
   </>`;
  }
}
