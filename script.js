const sheetURL = "https://script.google.com/macros/s/AKfycbzi4BQeeqrb2zTYLxkW4h3YO9ETdEQYJio7MGQk8j6qjncJ5do2iVbGjx570t-SDst9eQ/exec";

fetch(sheetURL)
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("recipe-container");

    data.forEach(row => {

      const recipe = row["レシピ名"];
      const farmer = row["農家"];
      const ingredient = row["食材"];
      const steps = row["作り方"];

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

  .catch(err => console.error("JSON取得エラー:", err));
