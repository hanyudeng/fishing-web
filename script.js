function toggleChat(){
  const box = document.getElementById("chatBox");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function sendMsg(){
  const input = document.getElementById("chatInput");
  const body = document.getElementById("chatBody");
  let msg = input.value.trim();

  if(!msg) return;

  body.innerHTML += `<div>你：${msg}</div>`;

  let reply = "客服：請稍等，我們將協助您。";

  if(msg.includes("怎麼領")){
    reply = "客服：可選擇登記入帳、ATM或郵局領取。";
  } else if(msg.includes("ATM")){
    reply = "客服：請持金融卡至ATM操作領取。";
  } else if(msg.includes("郵局")){
    reply = "客服：請攜帶證件至郵局櫃檯領取。";
  } else if(msg.includes("登記")){
    reply = "客服：請填寫銀行帳戶資料即可入帳。";
  }

  body.innerHTML += `<div>${reply}</div>`;
  input.value = "";
}


/* =========================
   ⭐ 新增：彈跳視窗功能
   ========================= */

function openModal(title, contentHTML){
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalBody").innerHTML = contentHTML;

  const modal = new bootstrap.Modal(document.getElementById("infoModal"));
  modal.show();
}

/* 各功能內容 */
const infoContent = {
  who: `
    <h6>誰能領</h6>
    <p>符合資格之本國國民皆可領取本次普發現金。</p>
  `,
  how: `
    <h6>如何領</h6>
    <ul>
      <li>登記入帳</li>
      <li>ATM領現</li>
      <li>郵局領現</li>
    </ul>
  `,
  atm: `
    <h6>ATM現領</h6>
    <p>持金融卡至指定ATM操作即可領取。</p>
  `,
  post: `
    <h6>郵局現領</h6>
    <p>請攜帶身分證至郵局櫃檯辦理領取。</p>
  `,
  register: `
    <h6>登記入帳（輸入資料）</h6>
    <form id="popupForm">
      <input class="form-control mb-2" placeholder="姓名" required>
      <input class="form-control mb-2" placeholder="身分證字號" required>
      <input class="form-control mb-2" placeholder="銀行帳號" required>
      <button type="submit" class="btn btn-primary w-100">送出</button>
    </form>
  `
};

/* =========================
   ⭐ 新增：上方選單點擊事件
   ========================= */

document.getElementById("nav1").onclick = () => {
  openModal("誰能領", infoContent.who);
};

document.getElementById("nav2").onclick = () => {
  openModal("如何領", infoContent.how);
};

document.getElementById("nav3").onclick = () => {
  openModal("登記入帳", infoContent.register);

  // 表單送出事件
  setTimeout(() => {
    const form = document.getElementById("popupForm");
    if(form){
      form.onsubmit = (e) => {
        e.preventDefault();
        alert("資料已送出（模擬）");
      };
    }
  }, 300);
};

document.getElementById("nav4").onclick = () => {
  openModal("ATM現領", infoContent.atm);
};

document.getElementById("nav5").onclick = () => {
  openModal("郵局現領", infoContent.post);
};


/* =========================
   ⭐ 新增：卡片點擊事件
   ========================= */

document.getElementById("card1").onclick = () => {
  document.getElementById("nav3").click();
};

document.getElementById("card2").onclick = () => {
  document.getElementById("nav4").click();
};

document.getElementById("card3").onclick = () => {
  document.getElementById("nav5").click();
};