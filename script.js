const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVLMIkacNKHNeAgrSPUuIPzG0lFzIN26ty8A32RJz3mv3GQby_foQ6Dhj48_v4G8mfsnhgq1bxrM31/pub?gid=1677149658&single=true&output=csv";

fetch(sheetURL)
  .then(response => response.text())
  .then(data => {

    const rows = data.split("\n").slice(1); // ヘッダ行を除く
    const container = document.getElementById("recipe-container");

    rows.forEach(row => {
      if (!row) return; // 空行スキップ

      const cols = row.split(",");

      const recipe = cols[0];    // 1列目 = レシピ名
      const farmer = cols[1];    // 2列目 = 農家
      const ingredient = cols[2];// 3列目 = 食材
      const steps = cols[3];     // 4列目 = 作り方

      const card = document.createElement("div");
      card.className = "recipe-card";

      card.innerHTML = `
        <h2>${recipe}</h2>
        <p>農家: ${farmer}</p>
        <p>食材: ${ingredient}</p>
        <p>${steps}</p>
      `;

      container.appendChild(card);
    });

  })
  .catch(err => console.error("CSV取得エラー:", err));