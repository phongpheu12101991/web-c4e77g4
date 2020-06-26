let allfoods = [
  {
    foodname: "Trà đào cam sả",
    foodimage:
      "https://media.cooky.vn/recipe/g2/16934/s640/recipe16934-635979775269411988.jpg",
    foodmaterials:
      '<ul id="nl0"><li>Đào : 1 quả</li><hr><li>Đường nước: 30ml</li><hr><li>Trà: 200ml</li><hr><li>Siro đào: 20ml</li><hr><li>Siro sả: 10ml</li><hr><li>Nước cam: 100ml</li><hr><li>Sả: 1 cây</li><hr><li>Đá: vừa đủ</li><hr></ul>',
    foodmaking:
      '<ul id="cl0"><li>Đào : Gọt vỏ, cắt miếng</li><hr><li>Cho hỗn hợp đường, siro, trà, nước cam vào bình shake, thêm đá vừa đủ, lắc mạnh</li><hr><li>Cây sả cắt bỏ 2 đầu, đập dập, cam cắt 1 lát</li><hr><li>Đổ toàn bộ ra cốc, cắm cây sả, thêm lát cam và miếng đào để decor, thưởng thức</li><hr></ul>',
    foodtime: new Date(2010, 10, 24, 16, 18, 20),
    creator: `phong`,
    foodid: 0,
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
  },
  {
    foodname: "Trà quế cam mật ong",
    foodimage:
      "https://toiyeutra.vn/upload/img/news/tra-cam-va-tra-que-2-thuc-tra-noi-tieng-nhat-cho-giang-sinh1.jpg",
    foodmaterials:
      '<ul id="nl1"><li>Cam vàng</li><li>Mật ong</li><li>Quế: vài thanh</li><li>Trà quế gói</li></ul>',
    foodmaking:
      '<ul id="cl1"><li>Đun quế, gói trà quế sôi nhẹ cho ra hết tinh chất quế </li><li>Pha loãng nước vừa đun, thêm vài giọt mật ong, cắt 1-2 lát cam vàng cho vào để vị dịu nhẹ</li></ul>',
    foodtime: new Date(2012, 11, 24, 16, 18, 20),
    creator: `phong`,
    foodid: 1,
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
  },
  {
    foodname: "Trà táo bạc hà",
    foodimage:
      "https://khamphavietnam.vn/wp-content/uploads/2015/04/tra-tao-bac-ha.jpg",
    foodmaterials:
      '<ul id="nl2"><li>Táo : 1 quả</li><li>Bạc hà 1 cọng</li><li>Đường nước: 30ml</li><li>Trà: 200ml</li><li>Siro táo: 20ml</li><li>Đá: vừa đủ</li></ul>',
    foodmaking:
      '<ul id="cl2"><li>Táo rửa sạch, cắt miếng</li><li>Cho hỗn hợp đường, siro, trà vào bình shake, thêm đá vừa đủ, lắc mạnh</li>Đổ ra cốc, thêm lá bạc hà, miếng táo</li></ul>',
    foodtime: new Date(2013, 5, 20, 16, 18, 20),
    creator: `phong`,
    foodid: 2,
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
  },
  {
    foodname: "Trà hạt sen lá nếp",
    foodimage:
      "http://bizweb.dktcdn.net/thumb/1024x1024/100/021/355/products/tra-oolong-hat-sen-kem-sua-1.jpg?v=1569553926777",
    foodmaterials:
      '<ul id="nl3"><li>Hạt sen</li><li>Đường nước: 30ml</li><li>Trà: 200ml</li><li>Lá nếp</li><li>Đá: vừa đủ</li></ul>',
    foodmaking:
      '<ul id="cl3"><li>Ninh hạt sen với đường vàng, trà lipton 1 gói, vài cọng lá nếp, lấy nước</li><li>Cho hỗn hợp đường, nước vừa đun vào bình shake, thêm đá vừa đủ, lắc mạnh</li><li>Đổ ra cốc, cắm lá nếp, thêm hạt sen đã ninh nhừ, thưởng thức</li></ul>',
    foodtime: new Date(2014, 4, 22, 16, 18, 20),
    creator: `phong`,
    foodid: 3,
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
  },
  {
    foodname: "Cơm",
    foodimage: "http://www.otakufood.com/wp-content/uploads/2013/03/rice5.jpg",
    foodmaterials:
      '<ul id="nl4"><li>Gạo: 1 bát</li><li>Nước sạch</li><li>Nồi cơm điện</li></ul>',
    foodmaking:
      '<ul id="cl4"><li>Gạo: Vo sạch bằng nước, không cần kĩ</li><li>Cho gạo vào nồi cơm, thêm nước hơn gạo khoảng 1 đốt ngón tay, ấn nút nấu cơm</li><li>Chờ nút nhẩy lên sau 15 phút là ăn được</li></ul>',
    foodtime: new Date(2019, 5, 2, 16, 18, 20),
    creator: `phong`,
    foodid: 4,
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
  },
  {
    foodname: "Rau muống luộc",
    foodimage: "http://img.thuocbietduoc.com.vn/images/news/2011/8/rau-muong-luoc_9-20811.jpg",
    foodmaterials:
      '<ul id="nl5"><li>Rau muống: 1 mớ</li><li>Nước sạch</li></ul>',
    foodmaking:
      '<ul id="cl5"><li>Rửa sạch rau, nhặt bỏ cuống</li><li>Cho rau vào nồi, luộc chín vừa đủ, vớt ra đĩa.</li></ul>',
    foodtime: new Date(2019, 6, 2, 16, 18, 20),
    creator: `phong`,
    foodid: 5,
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
  },
  {
    foodname: "Trứng rán",
    foodimage: "http://www.mrbreakfast.com/images/1135_fluffy_cheese_omelette.jpg",
    foodmaterials:
      '<ul id="nl6"><li>Trứng: 3 quả</li><li>Dầu ăn, gia vị, nước mắm</li><li>Hành lá</li></ul>',
    foodmaking:
      '<ul id="cl6"><li>Đập trứng vào bát, thêm gia vị, hành lá, đánh đều</li><li>Cho vào chảo, rán</li></ul>',
    foodtime: new Date(2019,8, 2, 16, 18, 20),
    creator: `phong`,
    foodid: 6,
    views: 0,
    like: [],
    dislike: [],
    foodcmt: [],
  },
];

function savefood() {
  localStorage.setItem("saveallfoods", `${JSON.stringify(allfoods)}`);
}
function getfood() {
  if (localStorage.getItem("saveallfoods") !== null) {
    allfoods = JSON.parse(localStorage.getItem("saveallfoods"));
    for (let x of allfoods) {
      x.foodtime = new Date(x.foodtime.split(" "));
    }
  }
}

savefood();
// getfood();

let account = [
  {
    username: `phong`,
    password: `123`,
    email: `phong@gmail.com`,
    type: `admin`,
    userid: 0,
    savemenu: [],
  },
  {
    username: `duong`,
    password: `123`,
    email: `duong@gmail.com`,
    type: `admin`,
    userid: 1,
    savemenu: [],
  },
  {
    username: `quan`,
    password: `123`,
    email: `quan@gmail.com`,
    type: `admin`,
    userid: 2,
    savemenu: [],
  },
];

function saveaccount() {
  localStorage.setItem("saveaccount", `${JSON.stringify(account)}`);
}
function getaccount() {
  if (localStorage.getItem("saveaccount") !== null) {
    account = JSON.parse(localStorage.getItem("saveaccount"));
  }
}
saveaccount();
