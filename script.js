// script.js
const csvURL = https://docs.google.com/forms/d/e/1FAIpQLScZyOh5oYldfP-pPoPHqu-SiugsGwr1mPMcMRbiY_bR_uCLnw/viewform";

// データ取得とHTML生成
fetch(csvURL)
  .then(res => res.text())
  .then(text => {
    const rows = text.split("\n"); // 行ごとに分割
    const container = document.getElementById("recipe-container");

    rows.forEach((row, index) => {
      if(index === 0) return; // ヘッダ行をスキップ
      const cols = row.split(","); // カンマ区切り

      const recipeName = cols[0] || "レシピ名なし";
      const farmer = cols[1] || "農家不明";
      const ingredients = cols[2] || "材料不明";
      const steps = cols[3] || "作り方不明";
      const photoURL = cols[4] || ""; // 画像URLがあれば

      // カードHTML生成
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <h3>${recipeName}</h3>
        <p><strong>農家:</strong> ${farmer}</p>
        <p><strong>材料:</strong> ${ingredients}</p>
        <p><strong>作り方:</strong> ${steps}</p>
        ${photoURL ? `<img src="${photoURL}" alt="${recipeName}" style="max-width:300px;">` : ""}
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("CSV読み込みエラー:", err);
  });