const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVLMIkacNKHNeAgrSPUuIPzG0lFzIN26ty8A32RJz3mv3GQby_foQ6Dhj48_v4G8mfsnhgq1bxrM31/pub?gid=1677149658&single=true&output=csv";

fetch(sheetURL)
  .then(response => response.text())
  .then(data => {

    const rows = data.split("\n").slice(1);

    const container = document.getElementById("recipe-container");

    rows.forEach(row => {

      const cols = row.split(",");

      const recipe = cols[1];
      const farmer = cols[2];
      const ingredient = cols[3];
      const steps = cols[4];


   const card = document.createElement("div");

      card.innerHTML = `
        <h2>${recipe}</h2>
        <p>農家: ${farmer}</p>
        <p>食材: ${ingredient}</p>
        <p>${steps}</p>
      `;

      container.appendChild(card);

    });

  });