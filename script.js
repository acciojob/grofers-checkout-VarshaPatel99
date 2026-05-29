function calculateTotal() {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += Number(prices[i].textContent);
  }

  const table = document.querySelector("table");

  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.textContent = "Total Price: " + total;
  cell.setAttribute("colspan", 2);

  row.appendChild(cell);
  table.appendChild(row);
}

// Call the function
calculateTotal();